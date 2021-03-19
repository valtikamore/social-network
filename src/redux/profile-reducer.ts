import {AllActionTypes, postType, profilePageType} from "./store";


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

const profileReducer = (state: profilePageType = initialState, action: AllActionTypes) => {

    switch (action.type) {
        case 'ADD-POST' : {
            let newPost: postType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
           return {
            ...state,
               posts:[...state.posts,newPost],
               newPostText:''
           }
        }
        case 'UPDATE-NEW-POST-TEXT' : {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default :
            return state
    }
}
export default profileReducer
// if (state.newPostText !== '') {
//     let newPost: postType = {
//         id: 5,
//         message: state.newPostText,
//         likeCount: 0
//     }
//     stateCopy.posts = [...state.posts, newPost]
//     stateCopy.newPostText = '';
//     return stateCopy
// }
// return state
