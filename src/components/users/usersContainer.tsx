
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from 'redux';
import Users from "./users";
import {followAC, SetUsersAC, UnfollowAC, userType} from "../../redux/users-reducer";

type MapStatePropsType = {
    users:userType[]
}
type MapDispatchToProps = {
    follow:(userId:number) => void
    unFollow:(userId:number) => void
    setUsers:(users:userType[]) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state:AppStateType) : MapStatePropsType => {
    return {
        users:state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return {
        follow : (userId:number) => {
        dispatch(followAC(userId))
        } ,
        unFollow : (userId:number) => {
            dispatch(UnfollowAC(userId))
        },
        setUsers : (users:userType[]) => {
            dispatch(SetUsersAC(users))
        },
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer

