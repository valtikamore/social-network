import React from "react";
import classes from "./ProfileInfo.module.scss"
import {Preloader} from "../../preloader/preloader";
import {profileUser} from "../../../api/api";
import mountains from '../../../assets/profile-cover.jpg'
import {ProfileStatus} from "./profileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile : null |  profileUser
    updateUserStatus: (status:string) => void
    status:string
}
export const ProfileInfo = (props:ProfileInfoPropsType)=> {
    const {profile,status,updateUserStatus} = props
    if(!profile) {
        return <Preloader/>
    }

    return (
            <div className={classes.profileInfoBlock}>
                <div className={classes.profileInfoBlock__img}>
                    <img src={mountains} alt="miuntains"/>
                </div>
                <img src={profile.photos.large!} alt=""/>
                <div>{profile.fullName}</div>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
            </div>
    )
}
