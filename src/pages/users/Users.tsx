import React, {FC} from "react";
import {userType} from "../../dal/api";
import {Paginator} from "../../components/common/paginaator/Paginator";
import {User} from "./user/user";
import s from "./user/user.module.css";
import {NavLink} from "react-router-dom";
import userWithoutPhoto from "../../assets/imagies/icons8-user-male.svg";


type usersPropsType = {
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users:userType[]
    pageSize: number
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
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
        unfollow,
    } = props


    return (
        <div>
            <div style={{marginBottom: '20px'}}>
                <Paginator
                    pageSize={pageSize}
                    totalUsersCount={totalUsersCount}
                    onPageChanged={onPageChanged}
                    currentPage={currentPage}
                    portionSize={5}
                    />
            </div>
            {users.map(user => {
                return <User follow={follow} followingInProgress={followingInProgress} unfollow={unfollow} user={user}/>
            })}
        </div>
    )


}