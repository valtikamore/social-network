import React from 'react'
import classes from '../Dialogs.module.css';


type messageType = {
    id:number
    message:string
}

const Message : React.FC<messageType>= (props) => {
    return (
        <div className={classes.message} key={props.id}>{props.message}</div>
    )
}

export default Message