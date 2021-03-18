import React from "react";
import classes from "./Profile.module.css"

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsCountainer from "./MyPosts/MyPostsCountainer";


type profileType = {

}



const Profile: React.FC<profileType> = () => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostsCountainer />
        </div>
    )
}
export default Profile