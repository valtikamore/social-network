import s from "./users.module.css";
import userWithoutPhoto from "../../assets/imagies/icons8-user-male.svg";
import React, {FC} from "react";
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type usersPropsType = {
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: userType[]
    pageSize: number
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
export const Users: FC<usersPropsType> = props => {
    debugger
    const {
        users,
        currentPage,
        pageSize,
        totalUsersCount,
        onPageChanged,
        followingInProgress,
        follow,
        unfollow,
        ...rest
    } = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const pageNumbers = pages.map((p, i) => <span
        onClick={() => onPageChanged(p)}
        key={i} className={currentPage === p ? s.selected : ''}
    >{p}</span>)
    return (
        <div>
            <div style={{marginBottom: '20px'}}>
                {pageNumbers}
            </div>
            {users.map((user) => {
                return (
                    <div key={user.id} className={s.grid}>
                        <NavLink to={`/profile/${user.id} `}>
                            <img className={s.photo}
                                 src={user.photos.small !== null
                                     ? user.photos.small
                                     : userWithoutPhoto}
                                 alt='photo'/>
                        </NavLink>

                        <div className={s.follow}>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}>
                                    Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}>
                                    follow</button>}
                        </div>
                        <div className={s.name}>{user.name}</div>
                        <div className={s.status}>{user.status}</div>
                    </div>
                )
            })}
        </div>
    )


}