import React, {ChangeEvent, RefObject} from "react";
import { dispatchActionType, postType} from "../../../redux/store";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";





type myPostsType = {
    postsData: postType[]
    newPostText:string|undefined
    dispatch:(action:dispatchActionType) => void
}

const MyPosts: React.FC<myPostsType> = (props) => {

    let addPost = () => {
            props.dispatch(addPostActionCreator())
    }

    let newChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    let postsElement =
        props.postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)
    return (
        <div className={classes.posts}>
            <div className={classes.createPost}>
                <div className={classes.createPostTitle}>My posts</div>
                <textarea className={classes.createPostArea}
                          value={props.newPostText}
                          onChange={newChangeTextHandler}> </textarea>
                <button className={classes.createPostBtn} onClick={addPost}>Create new Post</button>
            </div>
            {postsElement}
        </div>
    )
}
export default MyPosts