import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f1483392-45ca-4f41-b8a9-ec8e05304fe6'
    }
})
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

    getProfileUser(userId: string) {
        console.log('Please use profileAPI ti get users.')
        return profileAPI.getUserProfile(userId)
    }

}
export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status: string) {
        debugger
        return instance.put(`profile/status`, {
            status: status
        })
    }

}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
}

