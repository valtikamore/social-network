import s from "./users.module.css";
import userWithoutPhoto from "../../assets/imagies/userWithoutPhoto.png";
import React, { FC } from "react";
import {userType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";
type usersPropsType = {
    totalUsersCount:number
    currentPage:number
    onPageChanged:(pageNumber:number)=>void
    users:userType[]
    follow:(userId:number) => void
    unFollow:(userId:number) => void
    pageSize:number
}
export const Users:FC<usersPropsType> = ({users,currentPage,pageSize,totalUsersCount,unFollow,follow,onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return(
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
            {users.map(user => {
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
                                ? <button onClick={() => follow(user.id)}>Follow</button>
                                : <button onClick={() => unFollow(user.id)}>Unfollow</button>}
                        </div>
                        <div className={s.name}>{user.name}</div>
                        <div className={s.status}>{user.status}</div>
                        <div className={s.country}>user.location.country</div>
                        <div className={s.city}>user.location.city</div>
                    </div>
                )
            })}
        </div>
    )


}