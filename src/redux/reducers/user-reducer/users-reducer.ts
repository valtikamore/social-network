import {AllActionTypes} from "../../redux-store";

export type userFromServer = {
    name: string
    id: number
    photos: { small: null | string, large: string | null }
    status: string | null
    followed: boolean
}
enum ACTION_USER_REDUCER {
    FOLLOW='FOLLOW',
    UN_FOLLOW='UN_FOLLOW',
    SET_USERS='SET_USERS',
    SET_CURRENT_PAGE='SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING',
    FOLLOWING_IN_PROGRESS='FOLLOWING_IN_PROGRESS'
}

export type serverUsers = {
    users:userFromServer[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type initialStateType = typeof initialState
let initialState = {
    users: [] as userFromServer[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress:[] as number[]
}
export const follow = (userId:number) => ({type:'FOLLOW',userId}as const )
export const unFollow = (userId:number) => ({type:'UN_FOLLOW',userId}as const )
export const setUsers = (users:userFromServer[]) => ({type:'SET_USERS',users}as const )
export const setCurrentPage = (page:number) => ({type:'SET_CURRENT_PAGE',page}as const )
export const setTotalUsersCount = (totalCount:number) => ({type:'SET_TOTAL_USERS_COUNT',totalCount}as const )
export const toggleIsFetching = (isFetching:boolean) => ({type:'TOGGLE_IS_FETCHING',isFetching}as const )
export const toggleFollowing = (userId:number,isFetching:boolean) => ({type:'FOLLOWING_IN_PROGRESS',userId,isFetching}as const )

export const usersReducer = (state:initialStateType = initialState,action:AllActionTypes):initialStateType => {
    switch (action.type) {
        case ACTION_USER_REDUCER.FOLLOW :
            return  {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u,followed:true}
                    }
                    return u
                })
            }
        case ACTION_USER_REDUCER.UN_FOLLOW :
            return  {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u,followed:false}
                    }
                    return u
                })
            }
        case ACTION_USER_REDUCER.SET_USERS :
            return  {
                ...state,
                users:[...action.users]
            }
        case ACTION_USER_REDUCER.SET_CURRENT_PAGE :
            return  {
                ...state,
                currentPage: action.page
            }
        case ACTION_USER_REDUCER.SET_TOTAL_USERS_COUNT :{
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
        case ACTION_USER_REDUCER.FOLLOWING_IN_PROGRESS:{
            return {
                ...state,
                followingInProgress:action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: return state
    }
}

