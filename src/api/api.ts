import axios from "axios";

export interface userType  {
    name: string
    id: number
    photos: {small:  string, large:  string }
    status: string
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
export interface responseType<T = {}> {
    resultCode: number
    messages:string[],
    data: T
}
const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f1483392-45ca-4f41-b8a9-ec8e05304fe6'
    }
})
export const usersAPI = {
    getUsers(currentPage:number=1,pageSize:number=10){
        return  instance.get<commonUsers<userType>>(`users?page=${currentPage}&count=${pageSize}`)
    },
    userFollow(userId:number){
        return instance.post<responseType<userType>>(`follow/${userId}`)
    },
    userUnfollow(userId:number){
        return instance.delete<responseType<userType>>(`follow/${userId}`)
    }
}
export const profileAPI = {
    getProfileUser(userId:number){
        return instance.get<profileUser>(`profile/${userId}`)
    },
    getStatus(userId:number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string) {
        return instance.put<responseType<userType>>(`profile/status`, {status})
    }
}
export const authAPI = {
    authMe() {
        return instance.get<responseType<{id:number,email:string,login:string}>>(`auth/me`)
    },
}

