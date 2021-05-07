import axios from "axios";

export interface userType  {
    name: string
    id: number
    photos: {small: null | string, large: null | string }
    status: null | string
    followed: boolean
}
interface commonUsers<T> {
    items: T[],
    "totalCount": number
    "error": null | string
}
export interface profileUser {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string| null
    fullName: string
    contacts: {
        github: string| null
        vk: string| null
        facebook: string| null
        instagram: string| null
        twitter: string| null
        website: string| null
        youtube:string| null
        mainLink:string| null
    }
    photos: {small: null | string, large: null | string }

}
export interface userCommon<T = {}> {
    resultCode: number
    messages:string[],
    data: T
}
const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e9066260-317f-4932-b695-7e08b77a40e9'
    }
})
export const usersAPI = {
    getUsers(currentPage:number=1,pageSize:number=10){
        return  instance.get<commonUsers<userType>>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return  response.data
            })
    },
    getProfileUser(userId:string){
        return instance.get<profileUser>(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    userFollow(userId:number){
        return instance.post<userCommon<userType>>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    userUnfollow(userId:number){
        return instance.delete<userCommon<userType>>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}
export const authAPI = {
    authMe() {
        return instance.get<userCommon<{id:number,email:string,login:string}>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
}

