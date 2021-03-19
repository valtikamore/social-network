import React, {FC} from 'react';
import {UsersPropsType} from "./usersContainer";
import s from './users.module.css'
import axios from "axios";
import userWithoutPhoto from '../../assets/imagies/userWithoutPhoto.png'


export const Users: FC<UsersPropsType> = ({users, follow, setUsers, unFollow,}) => {
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resp => {
            setUsers(resp.data.items)
        })

    }
    const usersMap = users.map(user => {
        return (
            <div key={user.id} className={s.grid}>
                <img className={s.photo} src={user.photos.small !== null ?user.photos.small : userWithoutPhoto} alt='photo'/>
                <div className={s.follow}>
                    {user.follow
                        ? <button onClick={() => follow(user.id)}>Follow</button>
                        : <button onClick={() => unFollow(user.id)}>Unfollow</button>}
                </div>
                <div className={s.name}>{user.name}</div>
                <div className={s.status}>{user.status}</div>
                <div className={s.country}>user.location.country</div>
                <div className={s.city}>user.location.city</div>
            </div>
        )
    })
    return (
            {usersMap}
    );
};

