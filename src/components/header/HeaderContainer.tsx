
import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/reducers/authReducer/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";


type MapStateToPropsType = {
    isAuth:boolean
    login:string | null
}
type MapDispatchToProps = {
    setAuthUserData: (userId:number, email:string, login:string) => void
}
export type headerContainerPropsType = MapStateToPropsType & MapDispatchToProps


class HeaderContainer extends React.Component<headerContainerPropsType>{
    componentDidMount() {
       usersAPI.authMe()
            .then(data => {
              if(data.resultCode === 0 ) {
                  let {id,login,email} = data.data
                  this.props.setAuthUserData(id,email,login)
              }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
const mpst = (state:AppStateType):MapStateToPropsType => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})
export default connect(mpst,{setAuthUserData})(HeaderContainer);