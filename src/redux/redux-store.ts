import {combineReducers} from "redux";
import {createStore} from "redux";
import profileReducer, {addPost, setUsersProfile, updateNewPostText} from "./reducers/profile-reducer/profile-reducer";
import dialogsReducer, {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "./reducers/dialog-reducer/dialogs-reducer";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    usersReducer
} from "./reducers/user-reducer/users-reducer";

export type AllActionTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUsersProfile>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
export default store