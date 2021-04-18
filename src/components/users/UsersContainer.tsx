import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow,
    userFromServer
} from "../../redux/reducers/user-reducer/users-reducer";
import { AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../preloader/preloader";

type MapStatePropsType = {
    users: userFromServer[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: userFromServer[]) => void
    setCurrentPage:(page:number) => void
    setTotalUsersCount:(totalCount:number) => void
    toggleIsFetching:(isFetching:boolean) => void
}
export type usersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<usersPropsType>{
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (page:number) =>  {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        return(
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null }
                <Users pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       users={this.props.users}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,{follow,unFollow,setUsers,
        setCurrentPage,setTotalUsersCount, toggleIsFetching
}
   )(UsersContainer)
