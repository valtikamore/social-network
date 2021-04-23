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
            .then(response => {
               return  response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getProfileUser(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(data => {
                return data
            })
    }

}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
}

