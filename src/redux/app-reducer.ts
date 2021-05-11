
import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


export enum AUTH_ACTIONS_TYPE {
    SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS',
}


export type AppStateType = typeof initialState

let initialState = {
    initialized:false
}
export type appActionTypes =   ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => ({
    type:'SET_INITIALIZED_SUCCESS'} as const )

export const initializeApp = ():AppThunk => async (dispatch) => {
    let promise = dispatch(getAuthUserData())
    await Promise.all([promise])
    dispatch(initializedSuccess())
}



export const appReducer = (state: AppStateType = initialState, action: appActionTypes): AppStateType => {
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

