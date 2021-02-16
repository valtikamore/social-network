import React, {RefObject} from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


type profileType = {
    state:profilePageType
    addPost:(postMessage:string) => void
}



const Profile: React.FC<profileType> = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.posts}
                    addPost={props.addPost}/>
        </div>
    )
}
export default Profile