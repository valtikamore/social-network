import React from "react";
import classes from "./Header.module.css"
import {NavLink} from 'react-router-dom'
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileServerType} from "../../redux/profile-reducer";

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    setUserData: (userId:number,login:string,email:string) => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
            .then(resp => {
                if(resp.data.resultCode === 0) {
                    let {id, email, login} = resp.data.data
                    this.props.setUserData(id, email, login)
                }
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

};
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps,{setUserData}) (HeaderContainer)