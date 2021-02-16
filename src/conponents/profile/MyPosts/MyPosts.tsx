import React, {ChangeEvent, RefObject} from "react";
import {postType, profilePageType} from "../../redux/state";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

type myPostsType = {
    postsData:postType[]
    addPost:(postMessage:string) => void
}

const MyPosts : React.FC<myPostsType>= (props)=> {

    let postsElement =
        props.postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

    let newPostElement= React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return (
        <div className={classes.posts}>
            <div className={classes.createPost}>
                <div className={classes.createPostTitle}>My posts</div>
                <textarea className={classes.createPostArea} ref={newPostElement} ></textarea>
                <button className={classes.createPostBtn} onClick={addPost}>Create new Post</button>
            </div>
            {postsElement}
        </div>
    )
}
export default MyPosts