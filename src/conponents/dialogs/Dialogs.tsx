import React from 'react'
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogType, messageType} from "../../index";


type DialogPropsType = {
    dialogsData:Array<dialogType>
    messagesData:Array<messageType>
}



const Dialogs = (props:DialogPropsType) => {

    let dialogsElements = props.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messagesData
        .map(message => <Message message={message.message}/>)
    return (
        <div className={classes.dialogs}>
            <h2 className={classes.dialogsHeader}> Dialogs</h2>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs