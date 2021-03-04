import React, {ChangeEvent} from "react";
import { postType} from "../../../redux/store";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";






type myPostsType = {
    updateNewPostText:(text:string) => void
    addPost:() =>void
    newPostText:string|undefined
    posts: postType[]
}

const MyPosts: React.FC<myPostsType> = (props) => {

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