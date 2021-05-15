import {usersAPI, userType} from "../../../api/api";
import {AppThunk} from "../../redux-store";


export type serverUsers = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type UsersStateType = typeof initialState

enum ACTION_USER_REDUCER {
    FOLLOW = 'FOLLOW',
    UN_FOLLOW = 'UN_FOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'
}

let initialState = {
    users: [] as userType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[]
}
export type userActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowing>

export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowSuccess = (userId: number) => ({type: 'UN_FOLLOW', userId} as const)
export const setUsers = (users: userType[]) => ({type: 'SET_USERS', users} as const)
export const setCurrentPage = (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const)
export const toggleFollowing = (userId: number, isFetching: boolean) => ({
    type: 'FOLLOWING_IN_PROGRESS',
    userId,
    isFetching
} as const)
export const usersReducer = (state: UsersStateType = initialState, action: userActionsType): UsersStateType => {
    switch (action.type) {
        case ACTION_USER_REDUCER.FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case ACTION_USER_REDUCER.UN_FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case ACTION_USER_REDUCER.SET_USERS :
            return {
                ...state,
                users: [...action.users]
            }
        case ACTION_USER_REDUCER.SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.page
            }
        case ACTION_USER_REDUCER.SET_TOTAL_USERS_COUNT : {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        }
        case ACTION_USER_REDUCER.TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case ACTION_USER_REDUCER.FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const getUsers = (currentPage: number, pageSize: number): AppThunk => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    let res = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.data.items))
    dispatch(setTotalUsersCount(res.data.totalCount))

}
export const follow = (userId: number): AppThunk => async (dispatch) => {
    dispatch(toggleFollowing(userId, true))
    let res = await usersAPI.userFollow(userId)
    if (res.data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleFollowing(userId, false))
}
export const unfollow = (userId: number): AppThunk => async (dispatch) => {
    dispatch(toggleFollowing(userId, true))
    let res = await usersAPI.userUnfollow(userId)
    if (res.data.resultCode === 0) {
        dispatch(unFollowSuccess(userId))
    }
    dispatch(toggleFollowing(userId, false))
}