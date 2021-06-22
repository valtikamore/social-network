import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {log} from "util";

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    logout:() => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
    avatar:any
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return (
            <Header {...this.props}/>
        )
    }

}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    avatar:state.profilePage.profile?.photos.small
})
export default connect(mapStateToProps,{logout}) (HeaderContainer)
