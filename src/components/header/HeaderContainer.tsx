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

}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
            .then(resp => {
                if(resp.data.resultCode === 0) {
                    let {userId,login,email} = resp.data.data
                    this.props.setUserData(userId,login,email)
                }
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

};
const mapStateToProps = (state:AppStateType) => {

}
export default connect(mapStateToProps,{setUserData}) (HeaderContainer)