import {AllActionTypes} from "./redux-store"


export  type UserLocationType = { city: string, country: string }
export type userType = { id: number, follow: boolean, name: string, status: string, location: UserLocationType, imgUrl: string }
export type InitialStateType = typeof initialState


let initialState = {
    users: [] as userType[],
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default :
            return state
    }
}
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const UnfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const SetUsersAC = (users: userType[]) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
export default usersReducer