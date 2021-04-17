import React from "react";
import {addPost, updateNewPostText} from "../../../redux/reducers/profile-reducer/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AllActionTypes, AppStateType} from "../../../redux/redux-store";
import { Dispatch } from "redux";

type postType = {
    id:number
    message:string
    likeCount: number
}

type MapStatePropsType = {
    posts:postType[]
    newPostText:string
}
type MapDispatchToProps = {
    updateNewPostText:(text:string) => void
    addPost:() => void
}

export type MyPostPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        posts:state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
}
const mapDispatchProps = (dispatch:Dispatch<AllActionTypes>):MapDispatchToProps => {
    return {
        updateNewPostText : (text:string) => {
            let action = updateNewPostText(text)
            dispatch(action)
    },
        addPost : () => {
            dispatch(addPost())
        }
    }
}
const MyPostsCountainer = connect(mapStateToProps,mapDispatchProps) (MyPosts)
export default MyPostsCountainer