import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css"
import { MyPostPropsType } from "./MyPostsCountainer";
import Post from "./Post/Post";

const MyPosts: React.FC<MyPostPropsType> = (props) => {

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    let postsElement =
        props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)
    return (
        <div className={classes.posts}>
            <div className={classes.createPost}>
                <div className={classes.createPostTitle}>My posts</div>
                <textarea className={classes.createPostArea}
                          value={props.newPostText}
                          onChange={onPostChange}> </textarea>
                <button className={classes.createPostBtn} onClick={onAddPost}>Create new Post</button>
            </div>
            {postsElement}
        </div>
    )
}
export default MyPosts