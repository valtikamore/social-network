import s from "./users.module.css";
import userWithoutPhoto from "../../assets/imagies/userWithoutPhoto.png";
import React from "react";
import {userType} from "../../redux/users-reducer";


type usersPropsType = {
    totalUsersCount:number
    currentPage:number
    onPageChanged:(pageNumber:number)=>void
    users:userType[]
    follow:(userId:number) => void
    unFollow:(userId:number) => void
    pageSize:number
}
export const Users = (props:usersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return(
        <div>
            <div>
                {pages.map(page => {
                    return <span
                        className={props.currentPage === page ? s.selected : ''}
                        onClick={() => {
                            props.onPageChanged(page)
                        }}
                    >{page}</span>
                })}
            </div>
            {props.users.map(user => {
                return (
                    <div key={user.id} className={s.grid}>
                        <img className={s.photo} src={userWithoutPhoto} alt='photo'/>
                        <div className={s.follow}>
                            {user.follow
                                ? <button onClick={() => props.follow(user.id)}>Follow</button>
                                : <button onClick={() => props.unFollow(user.id)}>Unfollow</button>}
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