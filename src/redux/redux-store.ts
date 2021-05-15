
import dialogsReducer, {dialogsActionsType,} from "./reducers/dialog-reducer/dialogs-reducer";
import {usersReducer, userActionsType} from "./reducers/user-reducer/users-reducer";
import {authActionTypes, authReducer} from "./reducers/authReducer/authReducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {FormAction, reducer as formReducer} from 'redux-form'
import {profileActionsType, profileReducer} from "./reducers/profile-reducer/profile-reducer";


export type AllActionsType =
    | authActionTypes
    | userActionsType
    | dialogsActionsType
    | profileActionsType
    | FormAction

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown,AllActionsType>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form:formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),

)
