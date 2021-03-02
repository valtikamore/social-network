import React from 'react'
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogsPage, storeType,} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


type DialogPropsType = {
    store:storeType
}


const Dialogs: React.FC<DialogPropsType> = (props) => {

    let dialogsElements = props.store.getState().dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>)
    let messagesElements = props.store.getState().dialogsPage.messages
        .map(message => <Message message={message.message} id={message.id}/>)

    const newMessageBody = props.store.getState().dialogsPage.newMessageBody
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e:any) => {
       let body =  e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
                    onChange={onNewMessageChange}></textarea>
                <button onClick={onSendMessageClick}>send</button>
            </div>
        </div>
    )
}
export default Dialogs