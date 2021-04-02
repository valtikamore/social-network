import {AllActionTypes} from "../../redux-store";

// export type userType = {
//     id:number
//     followed:boolean
//     fullName:string
//     status:string
//     location:{city:string,country:string}
// }
export type userFromServer = {
    name:string
    id:number
    photos:{small:string | null,large:string | null}
    status:string | null
    followed:boolean
}
type usersFromServer = {
    items:userFromServer[]
    totalCount:number
    error:string
}
type initialStateType = typeof initialState
let initialState = {
    users: [

    ] as userFromServer[]
}
export const followAc = (userId:number) => ({type:'FOLLOW',userId}as const )
export const unFollowAc = (userId:number) => ({type:'UN_FOLLOW',userId}as const )
export const setUsersAc = (users:userFromServer[]) => ({type:'SET_USERS',users}as const )

export const usersReducer = (state:initialStateType = initialState,action:AllActionTypes):initialStateType => {
    switch (action.type) {
        case 'FOLLOW' :
            return  {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u,followed:true}
                    }
                    return u
                })
            }
        case 'UN_FOLLOW' :
            return  {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u,followed:false}
                    }
                    return u
                })
            }
        case 'SET_USERS' :
            return  {
                ...state,
                users:[...action.users]
            }
        default: return state
    }
}

