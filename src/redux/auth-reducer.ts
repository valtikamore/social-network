import {authAPI} from "../dal/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

export enum AUTH_ACTIONS_TYPE {
    SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA',
}


type AuthStateType = typeof initialState
let initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false
}
export type authActionTypes =   ReturnType<typeof setUserData>

export const setUserData = (userId:number| null,email:string | null,login:string |null,isAuth:boolean) => ({
    type:AUTH_ACTIONS_TYPE.SET_USER_DATA,payload:{userId,email,login,isAuth}} as const )

export const getAuthUserData = ():AppThunk => async (dispatch) => {
       const res = await authAPI.authMe()
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setUserData(id, email, login,true))
        }
        return res
}
export const login = (email:string,password:string,rememberMe:boolean,captcha:boolean):AppThunk =>  async (dispatch) => {

    let res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else  {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = ():AppThunk =>  async (dispatch) => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserData(null, null, null,false))
    }
}


export const authReducer = (state: AuthStateType = initialState, action: authActionTypes): AuthStateType => {
    switch (action.type) {
        case AUTH_ACTIONS_TYPE.SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

