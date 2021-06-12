import React from 'react'
import classes from '../Dialogs.module.scss';


type messageType = {
    id:number
    message:string|undefined
}

const Message : React.FC<messageType>= (props) => {
    return (
        <div className={classes.message} >{props.message}</div>
    )
}

export default Message
