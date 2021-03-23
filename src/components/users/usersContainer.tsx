import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    userType
} from "../../redux/users-reducer";

import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";


type MapStatePropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersApiComponentPropsType = MapStatePropsType & MapDispatchToProps

export class UsersContainer extends React.Component<UsersApiComponentPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items)
            this.props.setTotalUsersCount(resp.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items)
            this.props.toggleIsFetching(false)
        })
    }
    render() {
        return <>
            {this.props.isFetching &&
                <Preloader/>}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        </>
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
export default connect(mapStateToProps,
    {follow, unFollow, setUsers,
        setCurrentPage, setTotalUsersCount , toggleIsFetching,
})(UsersContainer)



// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(UnfollowAC(userId))
//         },
//         setUsers: (users: userType[]) => {
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(SetCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }