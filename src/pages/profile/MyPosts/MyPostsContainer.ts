import {postType} from "../../../redux/store";

import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC} from "../../../redux/profile-reducer/profile-reducer";

type MapStatePropsType = {
    posts: postType[]
}
type MapDispatchToProps = {
    addPost: (newPostText:string) => void
}
export type MyPostPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchProps)(MyPosts)
export default MyPostsContainer