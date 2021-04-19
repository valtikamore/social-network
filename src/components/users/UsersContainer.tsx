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
import {Users} from "./Users";
import {Preloader} from "../preloader/preloader";
import {usersAPI} from "../../api/api";

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

class UsersContainer extends React.Component<usersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
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

