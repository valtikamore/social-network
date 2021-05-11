import {authAPI} from "../dal/api";
import {AppThunk} from "./redux-store";


export enum AUTH_ACTIONS_TYPE {
    SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS',
}


type AuthStateType = typeof initialState

let initialState = {
    initialized:false
}
export type appActionTypes =   ReturnType<typeof setUserData>

export const setUserData = () => ({
    type:'SET_INITIALIZED_SUCCESS'} as const )

export const initialize = ():AppThunk => async (dispatch) => {
    const res = await authAPI.authMe()
    if (res.data.resultCode === 0) {
        dispatch(setUserData())
    }
}



export const authReducer = (state: AuthStateType = initialState, action: appActionTypes): AuthStateType => {
    switch (action.type) {
        case AUTH_ACTIONS_TYPE.SET_INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

