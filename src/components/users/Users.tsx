import classes from "./Users.module.scss";
import userWithoutPhoto from "../../assets/designer.svg";
import React from "react";

import {NavLink} from "react-router-dom";
import { userType } from "../../api/api";
import {Paginator} from "./paginator";

type propsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
    users: userType[]
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
                <Paginator
                    pageSize={props.pageSize}
                    totalUsersCount={props.totalUsersCount}
                    onPageChanged={props.onPageChanged}
                    currentPage={props.currentPage}
                    portionSize={10}
                />
            </div>
            <>
                {usersMap}
            </>
        </div>)
}