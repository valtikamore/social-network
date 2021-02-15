import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../redux/state";


type profileType = {
    state:profilePageType
}



const Profile = (props: profileType) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.posts}/>
        </div>
    )
}
export default Profile