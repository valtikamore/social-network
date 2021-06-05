import {applyMiddleware, combineReducers} from "redux";
import {createStore} from "redux";

import dialogsReducer, { dialogsActionsType } from "./dialogs-reducer";
import usersReducer, {userActionsType} from "./users-reducer";
import {authActionTypes, authReducer} from "./auth-reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk'

import {FormAction, reducer as formReducer} from 'redux-form'
import {appActionTypes, appReducer } from "./app-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import profileReducer, { profileActionsType } from "./profile-reducer/profile-reducer";
import { composeWithDevTools } from "redux-devtools-extension";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage : usersReducer,
    auth:authReducer,
    app:appReducer,
    form: formReducer
})
export type AllActionsType = authActionTypes | userActionsType | dialogsActionsType | profileActionsType | FormAction | appActionTypes
//thunk type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown,AllActionsType>

export type AppRootStateType = ReturnType<typeof rootReducer>
let store = createStore(
    rootReducer,composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
)
export const useTypedSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
// (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
export default store