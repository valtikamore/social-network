import React from "react";
import {usersPropsType} from "./UsersContainer";
import axios from "axios";
import userWithoutPhoto from '../../assets/designer.svg'
import classes from "./Users.module.css";

export class Users extends React.Component<usersPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (page:number) =>  {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1 ; i <= pageCount;i++) {
            pages.push(i)
        }
        return(
            <div>
                <div>
                    {pages.map((p,i) => <span
                        onClick={() => this.onPageChanged(p)}
                        key={i} className={this.props.currentPage === p ? classes.selectPage : ''}
                    >{p}</span>)}
                </div>
                {this.props.users.map(u => {
                    return <div key={u.id}>
                        <img className={classes.usersPhoto}
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
                        <div>{u.status}</div>
                    </div>
                })}
            </div>
        )
    }
}
