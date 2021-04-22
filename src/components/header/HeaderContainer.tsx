import React from "react";
import classes from "./Header.module.css"
import {NavLink} from 'react-router-dom'
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import {authMe, setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileServerType} from "../../redux/profile-reducer";

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    authMe:()=>void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
       this.props.authMe()
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
export default connect(mapStateToProps,{authMe}) (HeaderContainer)