import React, { RefObject} from "react";
import {postType} from "../../../redux/state";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

type myPostsType = {
    postsData:postType[]
    addPost:(postMessage:string) => void
}

const MyPosts : React.FC<myPostsType>= (props)=> {
    let newPostElement:RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = () => {
        if(newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = ' '
        }
    }

    let postsElement =
        props.postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)





    return (
        <div className={classes.posts}>
            <div className={classes.createPost}>
                <div className={classes.createPostTitle}>My posts</div>
                <textarea className={classes.createPostArea} ref={newPostElement}> </textarea>
                <button className={classes.createPostBtn} onClick={addPost}>Create new Post</button>
            </div>
            {postsElement}
        </div>
    )
}
export default MyPosts