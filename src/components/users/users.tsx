import {UsersPropsType} from "./usersContainer";
import React from "react";
import s from "./users.module.css";
import userWithoutPhoto from "../../assets/imagies/userWithoutPhoto.png";
import axios from "axios";

class Users extends React.Component<UsersPropsType>{
    constructor(props:UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resp => {
            this.props.setUsers(resp.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.users.map(user =>  {
                    return (
                        <div key={user.id} className={s.grid}>
                            <img className={s.photo} src={userWithoutPhoto} alt='photo'/>
                            <div className={s.follow}>
                                {user.follow
                                    ? <button onClick={() => this.props.follow(user.id)}>Follow</button>
                                    : <button onClick={() =>this.props.unFollow(user.id)}>Unfollow</button>}
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
}
export default Users