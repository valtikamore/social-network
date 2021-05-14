import { AppRootStateType } from "../redux-store"

export const getUsersSelector = (state:AppRootStateType) => {
    return state.usersPage.users
}
export const getPageSizeSelector = (state:AppRootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state:AppRootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurentPagetSelector = (state:AppRootStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetchingtSelector = (state:AppRootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state:AppRootStateType) => {
    return state.usersPage.followingInProgress
}
