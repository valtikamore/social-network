import {Dispatch} from "redux";
import {usersAPI, userType} from "../dal/api";
import { AppThunk} from "./redux-store";
import {updateobjectInArray} from "../utils/helpers/object-helpers";

type UsersStateType = typeof initialState
export enum USERS_ACTIONS_TYPE {
    FOLLOW = 'user-reducer/FOLLOW',
    UNFOLLOW = 'user-reducer/UNFOLLOW',
    SET_USERS = 'user-reducer/SET_USERS',
    SET_CURRENT_PAGE = 'user-reducer/SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'user-reducer/SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'user-reducer/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FETCHING_PROGRESS = 'user-reducer/TOGGLE_IS_FETCHING_PROGRESS'
}

export type serverUsers = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState = {
    users: [] as userType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[]
}


export const followSuccess = (userId: number) => ({type: USERS_ACTIONS_TYPE.FOLLOW, userId}) as const
export const unFollowSuccess = (userId: number) => ({type: USERS_ACTIONS_TYPE.UNFOLLOW, userId}) as const
export const setUsers = (users: userType[]) => ({type: USERS_ACTIONS_TYPE.SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: USERS_ACTIONS_TYPE.SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({type: USERS_ACTIONS_TYPE.SET_TOTAL_USERS_COUNT, count: totalUsersCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING, isFetching: isFetching}) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING_PROGRESS, isFetching, userId}) as const

export const usersReducer = (state: UsersStateType = initialState, action: userActionsType): UsersStateType => {
    switch (action.type) {
        case USERS_ACTIONS_TYPE.FOLLOW :
            return {
                ...state,
                users:updateobjectInArray(state.users,action.userId,'id',{followed:true})
            }
        case USERS_ACTIONS_TYPE.UNFOLLOW:
            return {
                ...state,
                users: updateobjectInArray(state.users,action.userId,'id',{followed: false})
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
export const requestUsers = (page: number, pageSize: number): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    let res = await usersAPI.getUsers(page, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.data.items))
    dispatch(setTotalUsersCount(res.data.totalCount))
}
const followUnfollowFlow = async (dispatch : Dispatch, userId:number,apiMethod:any,actionCreator:any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): AppThunk => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccess)
}
export const unfollow = (userId: number):AppThunk => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unFollowSuccess)
}


export type userActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
export default usersReducer