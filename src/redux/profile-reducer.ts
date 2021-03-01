import {dispatchActionType, messageType, postType, profilePageType, stateType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text:string) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText:text
    }
}


 const profileReducer = (state:profilePageType,action:dispatchActionType) => {

     switch(action.type) {
         case ADD_POST :
             if(state.newPostText !== '') {
                 let newPost: postType = {
                     id: 5,
                     message: state.newPostText,
                     likeCount: 0
                 }
                 state.posts.push(newPost);
                 state.newPostText = '';
             }
             return state
         case UPDATE_NEW_POST_TEXT :
             state.newPostText = action.newText
             return state
         default :
             return state
     }
}
export default profileReducer