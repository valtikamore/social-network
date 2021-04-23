import {applyMiddleware, combineReducers} from "redux";
import {createStore} from "redux";
import profileReducer, {addPostActionCreator, setUsersProfileSuccess, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
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

export type AllActionTypes =
    ReturnType<typeof addPostActionCreator>
    |ReturnType<typeof updateNewPostTextActionCreator>
    |ReturnType<typeof sendMessageCreator>
    |ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUsersProfileSuccess>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setUserData>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage : usersReducer,
    auth:authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
)

// (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
export default store