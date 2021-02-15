import React from "react";
import {postType, profilePageType} from "../../redux/state";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

type myPosts = {
    postsData:postType[]
}

const MyPosts = (props:myPosts)=> {

    let postsElement = props.postsData.map(post => <Post id={post.id} message={post.message} likeCount={post.likeCount}/>)
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