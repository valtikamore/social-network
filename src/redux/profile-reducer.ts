import {postType} from "./store";
import {AllActionTypes} from './redux-store'
import {Dispatch} from "redux";
import {usersAPI} from "../dal/api";

export enum PROFILE_ACTIONS_TYPE {
    ADD_POST = 'ADD_POST' ,
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    SET_USERS_PROFILE = 'SET_USERS_PROFILE'
}

export type ProfileServerType = {
    aboutMe: string  |null
    contacts: {
        facebook: string |null
        website: string |null
        vk: string |null
        twitter: string |null
        instagram: string |null
        youtube: string |null
        github: string |null
        mainLink: string   |null       }
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null,
        large: string | null
    }
}

export const addPostActionCreator = () =>  ({type: 'ADD_POST'}as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: 'UPDATE_NEW_POST_TEXT', newText: text} as const)
export const setUsersProfileSuccess = (profile:ProfileServerType ) =>  ({type: 'SET_USERS_PROFILE',profile} as const)

export const setUserProfile = (userId:string) => {
    return (dispatch:Dispatch) => {
        usersAPI.getProfileUser(userId)
            .then(data => {
                dispatch(setUsersProfileSuccess(data.data))
            })
    }
}

type InitialStateType = typeof initialState
let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hello bro', likeCount: 0},
    ]  as Array<postType> ,
    profile: null as null | ProfileServerType
}
const profileReducer = (state: InitialStateType = initialState, action: AllActionTypes):InitialStateType => {
    switch (action.type) {
        case PROFILE_ACTIONS_TYPE.ADD_POST : {
            let newPost: postType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            if (state.newPostText !== '') {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            }
            return state
        }
        case PROFILE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case PROFILE_ACTIONS_TYPE.SET_USERS_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
        default :
            return state
    }
}
export default profileReducer

