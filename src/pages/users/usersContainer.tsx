import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    requestUsers,
    setCurrentPage,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../components/common/Preloader/Preloader";
import {compose} from "redux";
import {userType} from "../../dal/api";
import {getCurentPagetSelector,
    getFollowingInProgressSelector,
    getIsFetchingtSelector,
    getPageSizeSelector, getTotalUsersCountSelector, getUsersSelector } from "../../redux/selectors/users-selector";

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
    requestUsers:(currentPage:number,pageSize:number) => void
}
export type UsersApiComponentPropsType = MapStatePropsType & MapDispatchToProps

export class UsersContainer extends React.Component<UsersApiComponentPropsType> {
    componentDidMount() {
       this.props.requestUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber,this.props.pageSize)
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
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurentPagetSelector(state),
        isFetching: getIsFetchingtSelector(state),
        followingInProgress:getFollowingInProgressSelector(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            setCurrentPage,requestUsers,follow,unfollow
        })
)(UsersContainer)