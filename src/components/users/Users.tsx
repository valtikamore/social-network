import React, {FC} from "react";
import {usersPropsType} from "./UsersContainer";
import axios from "axios";
import userWithoutPhoto from '../../assets/designer.svg'
export const Users: FC<usersPropsType> = ({users, follow, unFollow, setUsers}) => {
    debugger
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items)
            })
    }

    return (
        <div>
            {users.map(u => {
                return <div key={u.id}>
                    <img style={{width: '50px', height: '50px'}}
                         src={u.photos.large || u.photos.small
                             ? u.photos.small
                             : userWithoutPhoto} alt="user avatar"/>
                    {u.followed
                        ? <button onClick={() => {
                            unFollow(u.id)
                        }}>unFollow </button>
                        : <button onClick={() => {
                            follow(u.id)
                        }}> follow</button>}
                    <div>{u.name}</div>
                </div>
            })}
        </div>
    )
}