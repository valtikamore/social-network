import React, { ChangeEvent } from 'react'
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

import {DialogsPropsType} from "./DialogsContainer";

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessage, updateNewMessageBody}) => {
    let dialogsElements = dialogsPage.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} img={dialog.img}/>)
    let messagesElements = dialogsPage.messages
        .map(message => <Message key={message.id} message={message.message} id={message.id}/>)

    const newMessageBody = dialogsPage.newMessageBody

    const onSendMessageClick = () => {
        updateNewMessageBody()
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let body =  e.currentTarget.value
        sendMessage(body)
    }

    return (
        <div className={classes.dialogs}>
            <h2 className={classes.dialogsHeader}> Dialogs</h2>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <textarea
                    placeholder='enter message...'
                    value={newMessageBody}
                    onChange={onNewMessageChange}> </textarea>
                <button onClick={onSendMessageClick}>send</button>
            </div>
        </div>
    )
}
export default Dialogs