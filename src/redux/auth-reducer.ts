import {Dispatch} from "redux";
import {authAPI} from "../dal/api";
import { AllActionsType, AppThunk } from "./redux-store";

export enum AUTH_ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA' ,
}


type AuthStateType = typeof initialState
let initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false
}
export type authActionTypes =   ReturnType<typeof setUserData>

export const setUserData = (userId:number,email:string,login:string) => ({
    type:'SET_USER_DATA',data:{userId,email,login}} as const )


export const getAuthUserData = ():AppThunk => async (dispatch) => {
       const res = await authAPI.authMe()
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setUserData(id, email, login))
        }
}
export const login = (email:string,password:string,rememberMe:boolean,captcha:boolean):AppThunk =>  async (dispatch) => {
        let res = await authAPI.login(email,password,rememberMe,captcha)
                if (res.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
}



export const authReducer = (state:AuthStateType = initialState, action:AllActionsType):AuthStateType => {
     switch (action.type) {
         case AUTH_ACTIONS_TYPE.SET_USER_DATA: {
             return {
                 ...state,
                 ...action.data,
                 isAuth: true
             }
         }
         default: return state
     }
}

