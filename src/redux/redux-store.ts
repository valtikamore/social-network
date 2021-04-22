
import profileReducer, {addPost, setUsersProfileSuccess, updateNewPostText} from "./reducers/profile-reducer/profile-reducer";
import dialogsReducer, {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "./reducers/dialog-reducer/dialogs-reducer";
import {
    followSuccess, toggleFollowing,
    setCurrentPage, setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollowSuccess,
    usersReducer
} from "./reducers/user-reducer/users-reducer";
import {authReducer, setAuthUserData} from "./reducers/authReducer/authReducer";
import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore } from "redux";

export type AllActionTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUsersProfileSuccess>
    |ReturnType<typeof setAuthUserData>
    |ReturnType<typeof toggleFollowing>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth:authReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),

)
// (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
export default store