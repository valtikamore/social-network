import React, {FC} from "react";
import {userType} from "../../dal/api";
import {Paginator} from "../../components/common/paginaator/Paginator";
import {User} from "./user/user";

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
                    onPageChanged={onPageChanged}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    totalUsersCount={totalUsersCount}/>
            </div>
            {users.map((user, i) => <User
                key={i + user.id}
                user={user}
                followingInProgress={followingInProgress}
                follow={follow} unfollow={unfollow}
            />)}
        </div>
    )


}