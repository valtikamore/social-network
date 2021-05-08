import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {log} from "util";

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    getAuthUserData:()=>void
    logout:() => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps,{getAuthUserData,logout}) (HeaderContainer)