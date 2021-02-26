import React, {ChangeEvent, RefObject} from "react";
import {postType} from "../../../redux/state";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

type myPostsType = {
    postsData: postType[]
    message: string
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
}

const MyPosts: React.FC<myPostsType> = (props) => {

    let addPost = () => {
        if(props.message !== '') {
            props.addPost(props.message)
            props.changeNewText('')
        }
    }
    let newChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
    }
    let postsElement =
        props.postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)
    return (
        <div className={classes.posts}>
            <div className={classes.createPost}>
                <div className={classes.createPostTitle}>My posts</div>
                <textarea className={classes.createPostArea}
                          value={props.message}
                          onChange={newChangeTextHandler}> </textarea>
                <button className={classes.createPostBtn} onClick={addPost}>Create new Post</button>
            </div>
            {postsElement}
        </div>
    )
}
export default MyPosts