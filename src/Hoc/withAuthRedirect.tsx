import React, {ComponentType} from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStateToProps = {
    isAuth:boolean
}

const mapStateToProps = (state:AppStateType) : mapStateToProps => {
    return {
        isAuth:state.auth.isAuth
    }
}

export function WithAuthRedirect <T>(Component:ComponentType<T>)  {
    const RedirectComponent = (props:mapStateToProps) => {
        let {isAuth,...rest} = props
        if (!props.isAuth){
            return <Redirect to={'/login'}/>
        }
        return <Component {...rest as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}