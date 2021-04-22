import {AllActionTypes} from "./redux-store"
import {Dispatch} from "redux";
import {usersAPI} from "../dal/api";
import axios from "axios";

export enum USERS_ACTIONS_TYPE {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FETCHING_PROGRESS = 'TOGGLE_IS_FETCHING_PROGRESS'
}

export type userType = {
    id: number
    name: string
    status: string
    photos: {
        small?: string
        large?: string
    }
    followed: boolean
}

export type serverUsers = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type InitialStateType = typeof initialState
let initialState = {
    users: [] as userType[],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [] as number[]
}
export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unFollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsers = (users: userType[]) => ({type: 'SET_USERS', users}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totalUsersCount
}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching: isFetching}) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FETCHING_PROGRESS',
    isFetching,
    userId
}) as const

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


export const usersReducer = (state: InitialStateType = initialState, action: AllActionTypes): InitialStateType => {
    switch (action.type) {
        case USERS_ACTIONS_TYPE.FOLLOW :
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case USERS_ACTIONS_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case USERS_ACTIONS_TYPE.SET_USERS : {
            return {...state, users: action.users}
        }
        case  USERS_ACTIONS_TYPE.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case USERS_ACTIONS_TYPE.SET_TOTAL_USERS_COUNT : {
            return {...state, totalUsersCount: action.count}
        }
        case USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING : {
            return {...state, isFetching: action.isFetching}
        }
        case USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default :
            return state
    }
}

// export const getUsersThunkCreator = (currentPage:number,pageSize:number) => {
//     return  (dispatch:Dispatch) => {
//         dispatch(toggleIsFetching(true))
//         usersAPI.getUsers(currentPage,pageSize).then(data => {
//             dispatch(toggleIsFetching(false))
//             dispatch(setUsers(data.items))
//             dispatch(setTotalUsersCount(data.totalCount))
//         })
// }
// }

export default usersReducer