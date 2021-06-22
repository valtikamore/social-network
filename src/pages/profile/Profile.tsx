import React from "react";
import classes from "./Profile.module.scss"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {userProfileType} from "../../dal/api";


export type ProfilePropsType = {
    profile: null | userProfileType
    status:string
    updateStatus:(status:string) => void
    isOwner:boolean
    savePhoto:(file:any) => void
}

const Profile: React.FC<ProfilePropsType> =( { profile, status, updateStatus,isOwner,savePhoto})=> {
    return (
        <div className={classes.profile}>
            <ProfileInfo profile={profile} savePhoto={savePhoto} status={status} updateStatus={updateStatus} isOwner={isOwner} />
            <MyPostsContainer  />
        </div>
    )
}
export default Profile
