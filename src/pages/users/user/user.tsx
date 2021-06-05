import React, {FC} from 'react'
import s from "./user.module.css";
import {NavLink} from "react-router-dom";
import userWithoutPhoto from "../../../assets/imagies/icons8-user-male.svg";
import {userType} from "../../../dal/api";

interface userProps {
    user: userType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User: FC<userProps> = ({user, follow, unfollow, followingInProgress}) => {
    return (
        <div key={user.id} className={s.grid}>
            <NavLink to={`/profile/${user.id} `}>
                <img className={s.photo}
                     src={user.photos.small !== null
                         ? user.photos.small
                         : userWithoutPhoto}
                     alt='animated-user'/>
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
}