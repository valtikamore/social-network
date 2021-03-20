import {UsersPropsType} from "./usersContainer";
import React from "react";
import s from "./users.module.css";
import userWithoutPhoto from "../../assets/imagies/userWithoutPhoto.png";
import axios from "axios";

type usersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: null, large: null }
    status: null | string
    followed: boolean
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items)
            this.props.setTotalUsersCount(resp.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(page => {
                        return <span
                            className={this.props.currentPage === page ? s.selected : ''}
                            onClick={(e) => {
                                this.onPageChanged(page)
                            }}
                        >{page}</span>
                    })}
                </div>
                {this.props.users.map(user => {
                    return (
                        <div key={user.id} className={s.grid}>
                            <img className={s.photo} src={userWithoutPhoto} alt='photo'/>
                            <div className={s.follow}>
                                {user.follow
                                    ? <button onClick={() => this.props.follow(user.id)}>Follow</button>
                                    : <button onClick={() => this.props.unFollow(user.id)}>Unfollow</button>}
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