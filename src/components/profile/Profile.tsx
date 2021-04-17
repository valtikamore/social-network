import React from "react";
import classes from "./Profile.module.css"

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsCountainer from "./MyPosts/MyPostsCountainer";

import {profilePropsType} from "./ProfileContainer";







const Profile = (props:profilePropsType) => {
    const {profile,setUsersProfile} = props
    return (
        <div className={classes.profile}>
            <ProfileInfo profile={profile}/>
            <MyPostsCountainer />
        </div>
    )
}
export default Profile