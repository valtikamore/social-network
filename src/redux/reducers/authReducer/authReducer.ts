import {AllActionTypes} from "../../redux-store";

enum ACTION_AUTH_REDUCER {
    SET_USER_DATA = 'SET_USER_DATA'
}

type initialStateType = typeof initialState
let initialState = {
    id: null,
    email: null,
    login: null,
}

export const setUserData = (userId:number,email:string,login:string) => ({type:'SET_USER_DATA',data:{userId,email,login} }as const )

export const authReducer = (state:initialStateType=initialState,action:AllActionTypes):initialStateType => {
    switch (action.type) {
        case ACTION_AUTH_REDUCER.SET_USER_DATA: {
            return {...state,...action.data}
        }
    }
}