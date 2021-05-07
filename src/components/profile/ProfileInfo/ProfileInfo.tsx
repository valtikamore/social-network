import React from "react";
import classes from "./ProfileInfo.module.css"

import {Preloader} from "../../preloader/preloader";
import {profileUser} from "../../../api/api";

type ProfileInfoPropsType = {
    profile : null |  profileUser
}
const ProfileInfo = (props:ProfileInfoPropsType)=> {
    const {profile} = props
    if(!profile) {
        return <Preloader/>
    }
    return (
        <div >
            <div className={classes.content}>
                <img src={profile.photos.large!} alt=""/>
                <div>{profile.fullName}</div>
            </div>
        </div>
    )
}
export default ProfileInfo