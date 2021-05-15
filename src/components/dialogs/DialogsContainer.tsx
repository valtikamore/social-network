import React from 'react'
import {
    InitialStateDialogsType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/reducers/dialog-reducer/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { AppStateType} from "../../redux/redux-store";
import {compose, Dispatch } from 'redux';
import {WithAuthRedirect} from "../../hoc/authRedirectComponent";


type MapStatePropsType = {
    dialogsPage:InitialStateDialogsType
}
type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state:AppStateType) : MapStatePropsType => {
    return {
        dialogsPage:state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs)