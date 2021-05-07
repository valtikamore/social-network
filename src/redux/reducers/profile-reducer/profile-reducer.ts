import {AllActionTypes} from "../../redux-store";
import {Dispatch} from "redux";
import {profileUser, usersAPI} from "../../../api/api";

enum ACTION_PROFILE_REDUCER {
    ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    SET_USERS_PROFILE = 'SET_USERS_PROFILE'
}

export const addPost = () => ({type: 'ADD_POST'} as const)
export const updateNewPostText = (text: string) => ({type: 'UPDATE_NEW_POST_TEXT', newText: text} as const)
export const setUsersProfileSuccess = (profile: profileUser) => ({type: 'SET_USERS_PROFILE', profile} as const)

export const setUsersProfile = (userId:string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfileUser(userId)
            .then(data => {
                dispatch(setUsersProfileSuccess(data))
            })
    }
}

type postType = {
    id: number
    message: string
    likeCount: number
}

export type initialStateProfileType = typeof initialState

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hello bro', likeCount: 0},
    ] as postType[],
    profile: null as null | profileUser
}
export const profileReducer = (state: initialStateProfileType = initialState, action: AllActionTypes): initialStateProfileType => {
    switch (action.type) {
        case ACTION_PROFILE_REDUCER.ADD_POST :
            if (state.newPostText !== '') {
                let newPost: postType = {
                    id: 5,
                    message: state.newPostText,
                    likeCount: 0
                }
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            }
            return state
        case ACTION_PROFILE_REDUCER.UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case ACTION_PROFILE_REDUCER.SET_USERS_PROFILE: {
            return {...state, profile: action.profile}
        }
        default :
            return state
    }
}
export default profileReducer