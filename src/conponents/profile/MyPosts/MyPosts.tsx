import React, {ChangeEvent, RefObject} from "react";
import {postType} from "../../../redux/state";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

type myPostsType = {
    postsData: postType[]
    newPostText:string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<myPostsType> = (props) => {

    let addPost = () => {
            props.addPost()
    }
    let newChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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