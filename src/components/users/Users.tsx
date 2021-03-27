import React, {FC} from "react";
import {usersPropsType} from "./UsersContainer";
import classes from './Users.module.css'
import {followAc} from "../../redux/reducers/users-reducer";


export const Users: FC<usersPropsType> = ({users, follow, unFollow, setUsers}) => {
    if (users.length === 0) {
        setUsers(
            [{
                id: 1,
                followed: true,
                fullName: 'Valentine',
                status: 'looking for a job ',
                location: {city: 'Minsk', country: 'Belarus'}
            },
                {
                    id: 2,
                    followed: false,
                    fullName: 'Nata',
                    status: 'looking for a job ',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    followed: false,
                    fullName: 'Nata',
                    status: 'looking for a job ',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 4,
                    followed: false,
                    fullName: 'Nata',
                    status: 'looking for a job ',
                    location: {city: 'Minsk', country: 'Belarus'}
                }
            ])
    }

    return (
        <div>
            {users.map(u => <div key={u.id}>

                <img src="http://receptov.net/uploads/posts/2015-01/1421079112_krevetka.jpeg" alt="shrimp"
                     className={classes.usersPhoto}/>
                <div>{u.status}</div>
                <div>{u.fullName}</div>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
                <div>
                    {u.followed
                        ? <button onClick={() => unFollow(u.id)}>unfollowed</button>
                        : <button onClick={() => follow(u.id)}>followed</button>}
                </div>

            </div>)}
        </div>
    )
}