import React from "react";
import {connect} from "react-redux";
import {followAc, setUsersAc, unFollowAc, userType} from "../../redux/reducers/user-reducer/users-reducer";
import {AllActionTypes, AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Dispatch} from "redux";

type MapStatePropsType = {
    users: userType[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userType[]) => void
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
        setUsers: (users: userType[]) => {
            dispatch(setUsersAc(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)

