import { combineReducers } from "redux";
import { createStore } from "redux";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

export type AllActionTypes =
    ReturnType<typeof addPostActionCreator>
    |ReturnType<typeof updateNewPostTextActionCreator>
    |ReturnType<typeof sendMessageCreator>
    |ReturnType<typeof updateNewMessageBodyCreator>


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer)


export  default store