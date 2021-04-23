import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    getAuthUserData:()=>void
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
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps,{getAuthUserData}) (HeaderContainer)