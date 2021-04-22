import {connect} from "react-redux";
import {
    toggleFollowing,
    setCurrentPage,
    userFromServer, getUsers, follow, unfollow
} from "../../redux/reducers/user-reducer/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../preloader/preloader";
import React from "react";

type MapStatePropsType = {
    users: userFromServer[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type MapDispatchPropsType = {
    setCurrentPage: (page: number) => void
    getUsers: (currentPage:number,pageSize:number) => void
    follow:(userId:number) => void
    unfollow:(userId:number)=> void
}
export type usersPropsType = MapStatePropsType & MapDispatchPropsType

export class UsersContainer extends React.Component<usersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null}
                <Users pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       users={this.props.users}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                       follow={this.props.follow}
                       unFollow={this.props.unfollow}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
        setCurrentPage, getUsers,follow,unfollow
    }
)(UsersContainer)

