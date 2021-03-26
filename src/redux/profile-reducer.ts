import {postType, profilePageType} from "./store";
import {AllActionTypes} from "./redux-store";


export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {

    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hello bro', likeCount: 0},
    ],
}

export const profileReducer = (state: profilePageType = initialState, action: AllActionTypes): profilePageType => {

    switch (action.type) {
        case 'ADD-POST' :
            if (state.newPostText !== '') {
                let newPost: postType = {
                    id: 5,
                    message: state.newPostText,
                    likeCount: 0
                }
                let stateCopy = {...state}
                stateCopy.posts =[...state.posts]
                stateCopy.posts.push(newPost)
                stateCopy.newPostText = '';
                return stateCopy
            }
           return state
        case 'UPDATE-NEW-POST-TEXT' : {
            let copyState = {...state}
            copyState.posts = [...state.posts]
            copyState.newPostText = action.newText
            return copyState
        }
        default :
            return state
    }
}
export default profileReducer