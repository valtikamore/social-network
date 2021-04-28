import React, { FC} from "react";
import classes from "./MyPosts.module.css"
import {Field, InjectedFormProps} from "redux-form";
import {addPostExtendsFormDataType, addPostFormDataType } from "./MyPosts";




export const AddPost: FC<InjectedFormProps<addPostFormDataType> & addPostExtendsFormDataType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.createPostArea}
                   component={'textarea'}
                   name={'newPostText'}
                   placeholder={'enter message'}
            > </Field>
            <button className={classes.createPostBtn}>Create new Post</button>
        </form>
    )
}
