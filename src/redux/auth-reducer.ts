import {AllActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../dal/api";

export enum AUTH_ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA' ,
}


type initialStateType = typeof initialState
let initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false
}
export const setUserData = (userId:number,email:string,login:string) => ({
    type:'SET_USER_DATA',data:{userId,email,login}} as const )

export const getAuthUserData = () => {
    return (dispatch:Dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                     let {userId, email, login} = response.data.data
                    dispatch(setUserData(userId, email, login))
                }
            })
    }
}


export const authReducer = (state:initialStateType = initialState,action:AllActionTypes):initialStateType => {
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

