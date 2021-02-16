import React from 'react'
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogsPage,} from "../redux/state";


type DialogPropsType = {
    state:dialogsPage
}


const Dialogs: React.FC<DialogPropsType> = (props) => {

    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>)
    let messagesElements = props.state.messages
        .map(message => <Message message={message.message} id={message.id}/>)




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