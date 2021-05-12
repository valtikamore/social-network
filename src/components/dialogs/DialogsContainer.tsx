import React from 'react'
import {
    InitialStateDialogsType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/reducers/dialog-reducer/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { AppStateType} from "../../redux/redux-store";
import { Dispatch } from 'redux';


type MapStatePropsType = {
    dialogsPage:InitialStateDialogsType
    isAuth:boolean
}
type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state:AppStateType) : MapStatePropsType => {
    return {
        isAuth:state.auth.isAuth,
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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer