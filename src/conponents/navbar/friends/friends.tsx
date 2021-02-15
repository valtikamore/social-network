import React from "react";
import {friendsType} from "../../redux/state";
import classes from "./friends.module.css";

const Friends = (props:friendsType) => {
   return (
       <div key={props.id} >
           <img src={props.img} alt="" className={classes.friendAvatar}/>
           <div className={classes.friendName}>{props.name}</div>
       </div>
   )
}
export default Friends