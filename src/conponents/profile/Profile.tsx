import React, {RefObject} from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {dispatchActionType, profilePageType, stateType, storeType} from "../../redux/store";


type profileType = {
    state:profilePageType
    dispatch:(action:dispatchActionType) => void
}



const Profile: React.FC<profileType> = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile