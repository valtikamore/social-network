import React from 'react'
import {NavLink} from 'react-router-dom';

import {dialogType} from "../../redux/state";
import classes from "./DialogItem.module.css";


const DialogItem: React.FC<dialogType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={`${classes.dialog} ${classes.active} ${classes.grid}`} >
            <NavLink to={path} ><img src={props.img} alt="aa" className={classes.dialogAvatar}/></NavLink>
            <div className={classes.dialogText}>some text</div>
            <NavLink to={path} activeClassName={classes.active} key={props.id} className={classes.dialogUsername}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem