import { AppRootStateType } from "../redux-store"
import {createSelector} from "reselect";

const getUsers = (state:AppRootStateType) => {
    return state.usersPage.users
}
export const getUsersSelector = createSelector(getUsers,(users)=> {
    return users
})
export const getPageSizeSelector = (state:AppRootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state:AppRootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSelector = (state:AppRootStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state:AppRootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state:AppRootStateType) => {
    return state.usersPage.followingInProgress
}
