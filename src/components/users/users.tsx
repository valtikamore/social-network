import React, {FC} from 'react';
import {UsersPropsType} from "./usersContainer";
import s from './users.module.css'


export const Users: FC<UsersPropsType> = ({users, follow, setUsers, unFollow,}) => {
    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                imgUrl: 'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg',
                follow: true,
                name: 'Valentine',
                location: {city: 'Minsk', country: 'Belarus'},
                status: 'Looking for a job '
            },
            {
                id: 2,
                imgUrl: 'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg',
                follow: false,
                name: 'Ivan',
                location: {city: 'Moscow', country: 'Russia'},
                status: 'Looking for a job '
            },
            {
                id: 3,
                imgUrl: 'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg',
                follow: true,
                name: 'Kummer',
                location: {city: 'Chemnitz ', country: 'Germany'},
                status: 'Looking for a job '
            },
            {
                id: 4,
                imgUrl: 'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg',
                follow: true,
                name: 'Natalia',
                location: {city: 'Minsk', country: 'Belarus'},
                status: 'Looking for a job '
            },
        ])
    }

    const usersMap = users.map(user => {
        return (
            <div key={user.id} className={s.grid}>
                <img className={s.photo} src={user.imgUrl} alt='photo'/>
                <div className={s.follow}>
                    {user.follow
                        ? <button onClick={() => follow(user.id)}>Follow</button>
                        : <button onClick={() => unFollow(user.id)}>Unfollow</button>}
                </div>
                <div className={s.name}>{user.name}</div>
                <div className={s.status}>{user.status}</div>
                <div className={s.country}>{user.location.country}</div>
                <div className={s.city}>{user.location.city}</div>
            </div>
        )
    })
    return (
        <div>
            {usersMap}
        </div>
    );
};

