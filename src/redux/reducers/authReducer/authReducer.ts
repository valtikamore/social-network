import { AppThunk} from "../../redux-store";
import {authAPI} from "../../../api/api";


enum ACTION_AUTH_REDUCER {
    SET_USER_DATA = 'SET_USER_DATA'
}

type AuthStateType = typeof initialState

let initialState = {
    id: null as null | number,
    email: null  as null | string,
    login: null  as null | string,
    isAuth:false
}
export type authActionTypes =   ReturnType<typeof setAuthUserData>

export const setAuthUserData =(id:number| null,email:string | null,login:string |null,isAuth:boolean) => ({type:'SET_USER_DATA',payload:{id,email,login,isAuth} }as const )


export const getAuthUserData = ():AppThunk => async (dispatch) =>  {
    const res = await  authAPI.authMe()
    if(res.data.resultCode === 0 ) {
        let {id,login,email} = res.data.data
        dispatch(setAuthUserData(id,email,login,true))
    }
}

export const authReducer = (state:AuthStateType = initialState,action:authActionTypes):AuthStateType => {
    switch (action.type) {
        case ACTION_AUTH_REDUCER.SET_USER_DATA: {
            return {...state,...action.payload}
        }
        default: return state
    }
}