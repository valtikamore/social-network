import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f79818db-8b08-4e47-aa4a-5d0839f77694'
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
        return profileAPI.getProfileUser(userId)
    }

}
export const profileAPI = {
    getProfileUser(userId: string) {
        return instance.get(`profile/${userId}`)
    }

}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
}

