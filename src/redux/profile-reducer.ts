import {Dispatch} from "redux";
import {profileAPI, userProfileType, usersAPI} from "../dal/api";
import {AllActionsType} from "./redux-store";

export enum PROFILE_ACTIONS_TYPE {
    ADD_POST = 'ADD_POST',
    SET_USERS_PROFILE = 'SET_USERS_PROFILE',
    SET_STATUS = 'SET_STATUS'
}
export type postType ={
    id: number
    message: string
    likeCount: number
}
export type profileActionsType =
        ReturnType<typeof addPostActionCreator>
    |   ReturnType<typeof setUsersProfileSuccess>
    |   ReturnType<typeof setUserStatus>


export const addPostActionCreator = (newPostText:string) => ({type: 'ADD_POST',newPostText} as const)

export const setUsersProfileSuccess = (profile: userProfileType) => ({type: 'SET_USERS_PROFILE', profile} as const)
export const setUserStatus = (status: string) => ({type: 'SET_STATUS', status} as const)

export const setUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfileUser(userId)
            .then(response => {
                dispatch(setUsersProfileSuccess(response.data))
            })
    }
}

export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}
export const updateUserStatus = (status: string) => {
    debugger
    return (dispatch: Dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}

export type ProfileInitialStateType = typeof initialState
let initialState = {
    posts: [
        {id: 1, message: 'Hello bro', likeCount: 0},
    ] as Array<postType>,
    profile: null as null | userProfileType,
    status: ''
}
const profileReducer = (state: ProfileInitialStateType = initialState, action: AllActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case PROFILE_ACTIONS_TYPE.ADD_POST : {
            let newPost: postType = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            }
            if (action.newPostText !== '') {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                }
            }
            return state
        }
        case PROFILE_ACTIONS_TYPE.SET_USERS_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
        case PROFILE_ACTIONS_TYPE.SET_STATUS : {
            return {
                ...state, status: action.status
            }
        }
        default :
            return state
    }
}
export default profileReducer

