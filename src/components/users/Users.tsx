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
    follow: (userId: number) => void
    unFollow: (userId: number) => void

}

export const Users = (props: propsType) => {
    const {
        currentPage,
        follow,
        onPageChanged,
        pageSize,
        totalUsersCount,
        unFollow,
        users,
        ...rest
    } = props

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>

            <div>
                {pages.map((p, i) => <span
                    onClick={() => onPageChanged(p)}
                    key={i} className={currentPage === p ? classes.selectPage : ''}
                >{p}</span>)}
            </div>
            {users.map(u => {
                return <div key={u.id}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img className={classes.usersPhoto}
                             src={u.photos.small !== null
                                 ? u.photos.small
                                 : userWithoutPhoto} alt="user avatar"/>
                    </NavLink>

                    {u.followed
                        ? <button onClick={() => {
                            unFollow(u.id)
                        }}>unFollow </button>
                        : <button onClick={() => {
                            follow(u.id)
                        }}> follow</button>}
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
            })}
                </div>)
            }