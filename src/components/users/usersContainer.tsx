
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from 'redux';
import Users from "./users";
import {
    followAC,
    SetCurrentPageAC,
    setTotalUsersCountAC,
    SetUsersAC,
    UnfollowAC,
    userType
} from "../../redux/users-reducer";

type MapStatePropsType = {
    users:userType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}
type MapDispatchToProps = {
    follow:(userId:number) => void
    unFollow:(userId:number) => void
    setUsers:(users:userType[]) => void
    setCurrentPage:(pageNumber:number) => void
    setTotalUsersCount:(totalUsersCount:number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state:AppStateType) : MapStatePropsType => {
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        setCurrentPage : (pageNumber:number) => {
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setTotalUsersCount : (totalUsersCount:number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer

