import axios from "axios";



const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e9066260-317f-4932-b695-7e08b77a40e9'
    }
})
export const usersAPI = {
    getUsers(currentPage:number=1,pageSize:number=10){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return  response.data
            })
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getProfileUser(userId:string){
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    userFollow(userId:number){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    userUnfollow(userId:number){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

