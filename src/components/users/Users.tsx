import s from "./users.module.css";
import userWithoutPhoto from "../../assets/imagies/userWithoutPhoto.png";
import React, {FC} from "react";
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type usersPropsType = {
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: userType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    pageSize: number
    followingInProgress: number[]
}
export const Users: FC<usersPropsType> = props => {
    const {
        users,
        currentPage,
        pageSize,
        totalUsersCount,
        onPageChanged,
        followingInProgress,
        follow,
        unFollow,
        ...rest
    } = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div style={{marginBottom: '20px'}}>
                {pages.map(page => {
                    return <span
                        className={currentPage === page ? s.selected : ''}
                        onClick={() => {
                            onPageChanged(page)
                        }}
                    >{page}</span>
                })}
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
                                              unFollow(user.id)
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