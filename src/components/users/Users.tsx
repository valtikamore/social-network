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
}
export const Users: FC<usersPropsType> = props => {
    const {
        users,
        currentPage,
        pageSize,
        totalUsersCount,
        unFollow,
        follow,
        onPageChanged
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
                                ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '40bf29b6-1c3a-44f1-a9ef-ade0adc8e58e'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                unFollow(user.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                :
                                <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API_KEY': '40bf29b6-1c3a-44f1-a9ef-ade0adc8e58e'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                follow(user.id)
                                            }
                                        })
                                }}>follow</button>}
                        </div>
                        <div className={s.name}>{user.name}</div>
                        <div className={s.status}>{user.status}</div>
                    </div>
                )
            })}
        </div>
    )


}