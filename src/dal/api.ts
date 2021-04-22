import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '40bf29b6-1c3a-44f1-a9ef-ade0adc8e58e'
    }
})
export const usersAPI = {
    getUsers  (currentPage:number = 1,pageSize:number = 10)  {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow (userId:number) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return  response.data
            })
    },
    unfollow (userId:number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return  response.data
            })
    },
    authMe () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }

}

