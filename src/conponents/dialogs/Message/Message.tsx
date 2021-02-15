import React from 'react'
import classes from '../Dialogs.module.css';
import {messageType} from "../../redux/state";



const Message = (props: messageType) => {
    return (
        <div className={classes.message} key={props.id}>{props.message}</div>
    )
}

export default Message