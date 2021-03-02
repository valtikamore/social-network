import React, {RefObject} from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {dispatchActionType, profilePageType, stateType, storeType} from "../../redux/store";
import MyPostsCountainer from "./MyPosts/MyPostsCountainer";


type profileType = {
    store:storeType
}



const Profile: React.FC<profileType> = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostsCountainer store={props.store}/>
        </div>
    )
}
export default Profile