import {applyMiddleware, combineReducers} from "redux";
import {createStore} from "redux";
import profileReducer, {
    addPostActionCreator,
    setUsersProfileSuccess,
    setUserStatus,
} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator} from "./dialogs-reducer";
import usersReducer, {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unFollowSuccess,
} from "./users-reducer";
import {authReducer, setUserData} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from 'redux-form'

export type AllActionTypes =
    ReturnType<typeof addPostActionCreator>
    // |ReturnType<typeof updateNewPostTextActionCreator>
    |ReturnType<typeof sendMessageCreator>
    // |ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUsersProfileSuccess>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof setUserStatus>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage : usersReducer,
    auth:authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )

)

// (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
export default store