import { combineReducers } from "redux";
import { createStore } from "redux";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./reducers/profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./reducers/dialogs-reducer";
import {followAc, setUsersAc, unFollowAc, usersReducer} from "./reducers/users-reducer";

export type AllActionTypes =
    ReturnType<typeof addPostActionCreator>
    |ReturnType<typeof updateNewPostTextActionCreator>
    |ReturnType<typeof sendMessageCreator>
    |ReturnType<typeof updateNewMessageBodyCreator>
    |ReturnType<typeof followAc>
    |ReturnType<typeof unFollowAc>
    |ReturnType<typeof setUsersAc>


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer)


export  default store