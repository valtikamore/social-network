import React from "react";
import classes from "./ProfileInfo.module.css"
import {profileUserFromServer} from "../../../redux/reducers/profile-reducer/profile-reducer";
import {profilePropsType} from "../ProfileContainer";
import {Preloader} from "../../preloader/preloader";

type ProfileInfoPropsType = {
    profile : null |  profileUserFromServer
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
                description
            </div>
        </div>
    )
}
export default ProfileInfo