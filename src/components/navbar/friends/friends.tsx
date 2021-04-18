import React from "react";
import classes from "./friends.module.scss";

const Friends = () => {
    return (
        <div>
            <img src='' alt="" className={classes.friendAvatar}/>
            <div className={classes.friendName}></div>
        </div>
    )
}
export default Friends