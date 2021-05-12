
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {getAuthUserData} from "../../redux/reducers/authReducer/authReducer";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth:boolean
    login:string | null
}
type MapDispatchToProps = {
    getAuthUserData: () => void
}
export type headerContainerPropsType = MapStateToPropsType & MapDispatchToProps


class HeaderContainer extends React.Component<headerContainerPropsType>{
    componentDidMount() {
      this.props.getAuthUserData()
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
export default connect(mpst,{getAuthUserData})(HeaderContainer);