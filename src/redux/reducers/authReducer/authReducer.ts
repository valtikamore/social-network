import {AllActionTypes} from "../../redux-store";

enum ACTION_AUTH_REDUCER {
    SET_USER_DATA = 'SET_USER_DATA'
}

type initialStateType = typeof initialState
let initialState = {
    id: null as null | number,
    email: null  as null | string,
    login: null  as null | string,
    isAuth:false
}

export const setAuthUserData = (id:number, email:string, login:string) => ({type:'SET_USER_DATA',data:{id,email,login} }as const )

export const authReducer = (state:initialStateType=initialState,action:AllActionTypes):initialStateType => {
    switch (action.type) {
        case ACTION_AUTH_REDUCER.SET_USER_DATA: {
            return {...state,...action.data,isAuth:true}
        }
        default: return state
    }
}