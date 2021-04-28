import React from 'react'
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import { reduxForm} from "redux-form";
import { SendMessage } from './SendMessage';

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessage}) => {
    let dialogsElements = dialogsPage.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} img={dialog.img}/>)
    let messagesElements = dialogsPage.messages
        .map(message => <Message key={message.id} message={message.message} id={message.id}/>)

    const addNewMessage = (values:sendMessageFormDataType) => {
        sendMessage(values.sendNewMessage)
    }

    return (
        <div className={classes.dialogs}>
            <h2 className={classes.dialogsHeader}> Dialogs</h2>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
export type sendMessageFormDataType = {
    sendNewMessage: string
}
export type sendMessageExtendsFormDataType = {}

export const DialogsReduxForm = reduxForm<sendMessageFormDataType, sendMessageExtendsFormDataType>({
    form: 'dialogsAddMessageForm'
})(SendMessage)
export default Dialogs