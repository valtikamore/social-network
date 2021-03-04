import React from "react";
import { storeType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type myPostsType = {
   store:storeType
}

const MyPostsCountainer: React.FC<myPostsType> = (props) => {
    let state = props.store.getState()
    let addPost = () => {
            props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text:string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (
       <MyPosts
                updateNewPostText={onPostChange}
                addPost={addPost}
                newPostText={state.profilePage.newPostText}
                posts={state.profilePage.posts}/>
    )
}
export default MyPostsCountainer