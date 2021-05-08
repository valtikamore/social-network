import {applyMiddleware, combineReducers} from "redux";
import {createStore} from "redux";
import profileReducer, {profileActionsType} from "./profile-reducer";
import dialogsReducer, { dialogsActionsType } from "./dialogs-reducer";
import usersReducer, {userActionsType} from "./users-reducer";
import {authActionTypes, authReducer} from "./auth-reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from 'redux-form'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage : usersReducer,
    auth:authReducer,
    form: formReducer
})
export type AllActionsType = authActionTypes | userActionsType | dialogsActionsType | profileActionsType
//thunk type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown,AllActionsType>

export type AppRootStateType = ReturnType<typeof rootReducer>
let store = createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )

)

// (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
export default store