import React, {FC} from 'react'
import classes from "./user.module.scss";
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
        <div key={user.id} className={classes.user}>
            <div className={classes.photoBlock}>
                <NavLink to={`/profile/${user.id} `}>
                    <img className={classes.photo}
                         src={user.photos.small !== null
                             ? user.photos.small
                             : userWithoutPhoto}
                         alt='animated-user'/>
                </NavLink>

            </div>
            <div className={classes.aboutUser}>
                <div className={classes.name}>{user.name}</div>
                <div className={classes.status}>{user.status}</div>
            </div>
            <div className={classes.follow}>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>
                        delete friend</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>
                        Add friend</button>}
            </div>
        </div>
    )
}
