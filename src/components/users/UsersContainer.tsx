import React from "react";
import {connect} from "react-redux";
import {
    followAc,
    setCurrentPageAc, setTotalUsersCountAc,
    setUsersAc,
    unFollowAc,
    userFromServer
} from "../../redux/reducers/user-reducer/users-reducer";
import {AllActionTypes, AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Dispatch} from "redux";

type MapStatePropsType = {
    users: userFromServer[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userFromServer[]) => void
    setCurrentPage:(page:number) => void
    setTotalUsersCount:(totalCount:number) => void
}
export type usersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch<AllActionTypes>): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAc(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAc(userId))
        },
        setUsers: (users: userFromServer[]) => {
            dispatch(setUsersAc(users))
        },
        setCurrentPage:(page:number) => {
            dispatch(setCurrentPageAc(page))
        },
        setTotalUsersCount:(totalCount:number) => {
            dispatch(setTotalUsersCountAc(totalCount))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)

