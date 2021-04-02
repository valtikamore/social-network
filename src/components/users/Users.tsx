import React, {FC} from "react";
import {usersPropsType} from "./UsersContainer";
import classes from './Users.module.css'
import axios from "axios";
type userFromServer = {
    name:null
    id:number
    photos:{small:string,large:string}
    status:string
    followed:boolean
}
type usersFromServer = {
    items:userFromServer[]
    totalCount:number
    error:string
}

export const Users: FC<usersPropsType> = ({users, follow, unFollow, setUsers}) => {
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(respone => {
                debugger
                setUsers(respone.data.items)
            })

    }

    return (
        <div>

        </div>
    )
}