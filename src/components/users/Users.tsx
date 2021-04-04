import React from "react";
import {usersPropsType} from "./UsersContainer";
import axios from "axios";
import userWithoutPhoto from '../../assets/designer.svg'


export class Users extends React.Component<usersPropsType>{
    constructor(props:usersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    getUsers = () => {
        if (this.props.users.length === 0) {

        }
    }
    render() {
        return(
            <div>
                <button onClick={this.getUsers}>get users </button>
                {this.props.users.map(u => {
                    return <div key={u.id}>
                        <img style={{width: '50px', height: '50px'}}
                             src={ u.photos.small !== null
                                 ? u.photos.small
                                 : userWithoutPhoto} alt="user avatar"/>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unFollow(u.id)
                            }}>unFollow </button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}> follow</button>}
                        <div>{u.name}</div>
                    </div>
                })}
            </div>
        )
    }
}
