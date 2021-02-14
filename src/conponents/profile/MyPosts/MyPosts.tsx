import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postsType} from "../Profile";


const MyPosts = (props:postsType)=> {

    let postsElement = props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>)
    return (
        <div className={classes.posts}>
            <div className={classes.createPost}>
                <div className={classes.createPostTitle}>My posts</div>
                <textarea className={classes.createPostArea}></textarea>
                <button className={classes.createPostBtn}>Create new Post</button>
            </div>
            {postsElement}
        </div>
    )
}
export default MyPosts