import React from "react";
import classes from "./MyPosts.module.scss"
import Post from "./Post/Post";
import { reduxForm} from "redux-form";
import {MyPostPropsType} from "./MyPostsContainer";
import {AddPost} from "./AddPost";

const MyPosts: React.FC<MyPostPropsType> = (props) => {
    let addNewPost = (values: addPostFormDataType) => {
        props.addPost(values.newPostText)
    }
    let postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount} key={p.id}/>)

    return (
        <div className={classes.posts}>
            <div className={classes.createPost}>
                <div className={classes.createPostTitle}>My posts</div>
                <DialogsReduxForm onSubmit={addNewPost}/>
            </div>
            {postsElement}
        </div>
    )
}
export type addPostFormDataType = {
    newPostText: string
}
export type addPostExtendsFormDataType = {}
export const DialogsReduxForm = reduxForm<addPostFormDataType, addPostExtendsFormDataType>({
    form: 'dialogsAddMessageForm'
})(AddPost)
export default MyPosts
