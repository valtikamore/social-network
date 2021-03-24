import {AllActionTypes} from "./redux-store"


export type userType = { id: number, name: string, status: string, photos: { small?: string, large?: string }, followed: boolean }
type InitialStateType = typeof initialState


let initialState = {
    users: [] as userType[],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false
}

const usersReducer = (state: InitialStateType = initialState, action: AllActionTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user
                })
            }
        case 'SET_USERS' : {
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE' : {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT' : {
            return {...state, totalUsersCount: action.count}
        }
        case 'TOGGLE_IS_FETCHING' : {
            return {...state, isFetching: action.isFetching}
        }
        default :
            return state
    }
}
export const follow = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unFollow = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsers = (users: userType[]) => ({type: 'SET_USERS', users}) as const
export const setCurrentPage = (currentPage:number) => ({type: 'SET_CURRENT_PAGE',currentPage}) as const
export const setTotalUsersCount = (totalUsersCount:number) =>  ({type: 'SET_TOTAL_USERS_COUNT', count:totalUsersCount}) as const
export const toggleIsFetching = (isFetching:boolean) =>  ({type: 'TOGGLE_IS_FETCHING', isFetching:isFetching}) as const

export default usersReducer