import { combineReducers } from "redux";
import { createStore } from "redux";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./reducers/profile-reducer/profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./reducers/dialog-reducer/dialogs-reducer";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    usersReducer
} from "./reducers/user-reducer/users-reducer";

export type AllActionTypes =
    ReturnType<typeof addPostActionCreator>
    |ReturnType<typeof updateNewPostTextActionCreator>
    |ReturnType<typeof sendMessageCreator>
    |ReturnType<typeof updateNewMessageBodyCreator>
    |ReturnType<typeof follow>
    |ReturnType<typeof unFollow>
    |ReturnType<typeof setUsers>
    |ReturnType<typeof setCurrentPage>
    |ReturnType<typeof setTotalUsersCount>
    |ReturnType<typeof toggleIsFetching>

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer)


export  default store