import {Dispatch} from "redux";
import {profileAPI, userProfileType, usersAPI} from "../../dal/api";

export type ProfileInitialStateType = typeof initialState
export enum PROFILE_ACTIONS_TYPE {
    ADD_POST = 'profile-reducer/ADD_POST',
    SET_USERS_PROFILE = 'profile-reducer/SET_USERS_PROFILE',
    SET_STATUS = 'profile-reducer/SET_STATUS',
    REMOVE_POST = 'profile-reducer/REMOVE_POST',
    SET_PHOTO = 'profile-reducer/SET_PHOTO'
}
export type postType = {
    id: number
    message: string
    likeCount: number
}


let initialState = {
    posts: [
        {id: 1, message: 'Hello bro', likeCount: 0},
    ] as Array<postType>,
    profile: null as null | userProfileType,
    status: ''
}
const profileReducer = (state: ProfileInitialStateType = initialState, action: profileActionsType): ProfileInitialStateType => {
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
        case PROFILE_ACTIONS_TYPE.REMOVE_POST: {
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case PROFILE_ACTIONS_TYPE.SET_PHOTO : {
            return {
                ...state,
                //@ts-ignore
                profile: {...state.profile,photos:action.file}
            }
        }
        default :
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type:PROFILE_ACTIONS_TYPE.ADD_POST , newPostText} as const)
export const deletePostAC = (postId: number) => ({type: PROFILE_ACTIONS_TYPE.REMOVE_POST, postId} as const)
export const setUsersProfileSuccessAC = (profile: userProfileType) => ({type: PROFILE_ACTIONS_TYPE.SET_USERS_PROFILE, profile} as const)
export const setUserStatus = (status: string) => ({type: PROFILE_ACTIONS_TYPE.SET_STATUS, status} as const)
export const setPhoto = (file:any) => ({type: PROFILE_ACTIONS_TYPE.SET_PHOTO, file} as const)

export const setUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let res = await usersAPI.getProfileUser(userId)
    dispatch(setUsersProfileSuccessAC(res.data))
}

export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    let res = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(res.data))

}
export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.updateUserStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export const savePhoto = (file:any) => async (dispatch: Dispatch) => {
    let res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(setPhoto(res.data.data.photos))
    }
}

export type profileActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUsersProfileSuccessAC>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setPhoto>
export default profileReducer

