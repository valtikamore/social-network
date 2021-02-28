import React, {RefObject} from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {profilePageType, stateType, storeType} from "../../redux/state";


type profileType = {
    state:profilePageType
    addPost:() => void
    updateNewPostText:(newText: string) => void
}



const Profile: React.FC<profileType> = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.posts}
                     newPostText={props.state.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile