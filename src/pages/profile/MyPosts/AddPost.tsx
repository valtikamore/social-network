import React, { FC} from "react";
import classes from "./MyPosts.module.css"
import {Field, InjectedFormProps} from "redux-form";
import {addPostExtendsFormDataType, addPostFormDataType } from "./MyPosts";
import {maxLengthCreator, required} from "../../../utils/validate/validators";
import {Textarea} from "../../../components/common/formsControl/FormsControl";



const maxLengthCreator10 =maxLengthCreator(10)
export const AddPost: FC<InjectedFormProps<addPostFormDataType> & addPostExtendsFormDataType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.createPostArea}
                   component={Textarea}
                   name={'newPostText'}
                   placeholder={'enter message'}
                   validate={[required,maxLengthCreator10]}
            />
            <button className={classes.createPostBtn}>Create new Post</button>
        </form>
    )
}
