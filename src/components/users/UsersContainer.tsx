import React from "react";
import {connect} from "react-redux";
import {followAc, setUsersAc, unFollowAc, userFromServer} from "../../redux/reducers/user-reducer/users-reducer";
import {AllActionTypes, AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Dispatch} from "redux";

type MapStatePropsType = {
    users: userFromServer[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userFromServer[]) => void
}
export type usersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)

