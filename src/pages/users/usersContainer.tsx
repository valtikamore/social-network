import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../components/common/Preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../Hoc/withAuthRedirect";
import {userType} from "../../dal/api";

type MapStatePropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:number[]
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers:(currentPage:number,pageSize:number) => void
}
export type UsersApiComponentPropsType = MapStatePropsType & MapDispatchToProps

export class UsersContainer extends React.Component<UsersApiComponentPropsType> {
    componentDidMount() {
       this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
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
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            setCurrentPage,getUsers,follow,unfollow
        }),
    WithAuthRedirect
)(UsersContainer)