import {AllActionTypes} from "../../redux-store";
import {Dispatch} from "redux";
import {profileAPI, profileUser, usersAPI} from "../../../api/api";

enum ACTION_PROFILE_REDUCER {
    ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    SET_USERS_PROFILE = 'SET_USERS_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS'
}

export const addPost = () => ({type: 'ADD_POST'} as const)
export const updateNewPostText = (text: string) => ({type: 'UPDATE_NEW_POST_TEXT', newText: text} as const)
export const setUsersProfileSuccess = (profile: profileUser) => ({type: 'SET_USERS_PROFILE', profile} as const)
export const setUserStatus = (status: string) => ({type: 'SET_USER_STATUS', status} as const)

export const setUsersProfile = (userId:number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfileUser(userId)
            .then(res => {
                dispatch(setUsersProfileSuccess(res))
            })
    }
}

export const getUserStatus = (userId:number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(res => {
                dispatch(setUserStatus(res.data))
            })
    }
}
export const updateUserStatus = (status:string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(res => {
                if(res.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
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
    profile: null as null | profileUser,
    status:''
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
        case ACTION_PROFILE_REDUCER.SET_USER_STATUS: {
            return {...state,status: action.status}
        }
        default :
            return state
    }
}
export default profileReducer