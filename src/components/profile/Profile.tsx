import React from "react";
import classes from "./Profile.module.scss"

import MyPostsCountainer from "./MyPosts/MyPostsCountainer";
import {profileContainerPropsType} from "./ProfileContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

const Profile = (props:profileContainerPropsType) => {
    const {profile,status,updateUserStatus} = props

    return (
        <div className={classes.profile}>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            <MyPostsCountainer />
        </div>
    )
}
export default Profile