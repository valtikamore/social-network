import React from 'react'

import { storeType,} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


type DialogComponentPropsType = {
    store:storeType
}


const DialogsCountainer: React.FC<DialogComponentPropsType> = (props) => {
    let state = props.store.getState().dialogsPage


    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }



    return (
        <Dialogs    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}/>
    )
}
export default DialogsCountainer