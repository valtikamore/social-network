import { dispatchActionTypes, postType, profilePageType} from "./store";



export const addPostActionCreator = ()=> {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextActionCreator = (text:string) => {

    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText:text
    } as const
}
let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hello bro', likeCount: 0},
    ],
}

 const profileReducer = (state:profilePageType = initialState,action:dispatchActionTypes) => {

     switch(action.type) {
         case 'ADD-POST' :
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
         case 'UPDATE-NEW-POST-TEXT' :
             state.newPostText = action.newText
             return state
         default :
             return state
     }
}
export default profileReducer