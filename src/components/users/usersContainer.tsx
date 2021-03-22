import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux';
import {followAC, SetCurrentPageAC, setTotalUsersCountAC, SetUsersAC, UnfollowAC, userType} from "../../redux/users-reducer";

import React from "react";
import axios from "axios";
import {Users} from "./Users";


type MapStatePropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToProps = {

    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
export type UsersApiComponentPropsType = MapStatePropsType & MapDispatchToProps

export class UsersContainer extends React.Component<UsersApiComponentPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items)
            this.props.setTotalUsersCount(resp.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items)
        })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(UnfollowAC(userId))
        },
        setUsers: (users: userType[]) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)



