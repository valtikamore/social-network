import {combineReducers} from "redux";
import {createStore} from "redux";
import profileReducer, {addPostActionCreator, setUsersProfile, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import usersReducer, {
    follow,
     setCurrentPage,
     setTotalUsersCount,
     setUsers,
     toggleIsFetching,
     unFollow,
} from "./users-reducer";
import {authReducer} from "./auth-reducer";
type setUserData = {
    type:'SET_USER_DATA'             /*support*/
    data:{userId:number,email:string,login:string}
}
export type AllActionTypes =
    ReturnType<typeof addPostActionCreator>
    |ReturnType<typeof updateNewPostTextActionCreator>
    |ReturnType<typeof sendMessageCreator>
    |ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUsersProfile>
    | setUserData


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage : usersReducer,
    auth:authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)


export default store