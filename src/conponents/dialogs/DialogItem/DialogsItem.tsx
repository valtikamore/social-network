import React from 'react'
import {NavLink} from 'react-router-dom';
import classes from '../Dialogs.module.css';

type DialogItemType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem