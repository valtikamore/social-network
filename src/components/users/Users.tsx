import classes from "./Users.module.scss";
import userWithoutPhoto from "../../assets/designer.svg";
import React from "react";
import {userFromServer} from "../../redux/reducers/user-reducer/users-reducer";
import {NavLink} from "react-router-dom";

type propsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
    users: userFromServer[]
    followingInProgress: number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const Users = (props: propsType) => {
    const {
        currentPage,
        onPageChanged,
        pageSize,
        totalUsersCount,
        users,
        ...rest
    } = props

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    const pageNumbers = pages.map((p, i) => <span
        onClick={() => onPageChanged(p)}
        key={i} className={currentPage === p ? classes.selectPage : ''}
    >{p}</span>)
    const usersMap = users.map(u => {
        return <div key={u.id} className={classes.users}>
            <NavLink to={`/profile/${u.id}`}>
                <img
                    src={u.photos.small !== null
                        ? u.photos.small
                        : userWithoutPhoto} alt="user avatar"/>
            </NavLink>

            {u.followed
                ? <button disabled={rest.followingInProgress.some(id => id === u.id)}
                          onClick={() => {
                              rest.unFollow(u.id)
                          }}>unFollow </button>
                : <button disabled={rest.followingInProgress.some(id => id === u.id)}
                          onClick={() => {
                              rest.follow(u.id)
                          }}> follow</button>}
            <div>{u.name}</div>
            <div>{u.status}</div>
        </div>
    })
    return (
        <div>
            <div className={classes.pageNumbers}>
                {pageNumbers}
            </div>
            <>
                {usersMap}
            </>
        </div>)
}