import React from "react";
import classes from "./Profile.module.scss"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsCountainer from "./MyPosts/MyPostsCountainer";
import {profileContainerPropsType} from "./ProfileContainer";

const Profile = (props:profileContainerPropsType) => {
    const {profile} = props
    return (
        <div className={classes.profile}>
            <ProfileInfo profile={profile}/>
            <MyPostsCountainer />
        </div>
    )
}
export default Profile