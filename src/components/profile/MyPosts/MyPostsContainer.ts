import {postType} from "../../../redux/store";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: postType[]
}
type MapDispatchToProps = {
    addPost: (newPostText:string) => void
}
export type MyPostPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchProps)(MyPosts)
export default MyPostsContainer