import React, { ChangeEvent } from 'react'
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

import {DialogsPropsType} from "./DialogsContainer";






const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} key={dialog.id}/>)
    let messagesElements = state.messages
        .map(message => <Message message={message.message} id={message.id} key={message.id}/>)

    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let body =  e.currentTarget.value
        props.updateNewMessageBody(body)
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
                    placeholder='ddddd'
                    value={newMessageBody}
                    onChange={onNewMessageChange}> </textarea>
                <button onClick={onSendMessageClick}>send</button>
            </div>
        </div>
    )
}
export default Dialogs