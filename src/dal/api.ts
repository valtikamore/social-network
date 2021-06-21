import axios from "axios";

export type userResponseType = {
    items : userType[]
    totalCount: number
    error: string
}
export interface ResponseType<T = {}> {
    resultCode: number
    messages: string[],
    data: T
}
export type userType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
export type authDataType = {
    id: number
    email: string
    login: string
}
export type userProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f1483392-45ca-4f41-b8a9-ec8e05304fe6'
    }
})
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<userResponseType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId: number) {
        return instance.post<ResponseType<userType>>(`follow/${userId}`)
    },
    // maybe refactor
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },

    getProfileUser(userId: number) {
        console.log('Please use profileAPI ti get users.')
        return profileAPI.getUserProfile(userId)
    }

}
export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<userProfileType>(`profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status: string) {
        return instance.put<ResponseType<userType>>(`profile/status`, {
            status: status
        })
    },
    savePhoto(file: any) {
        let formData = new FormData()
        formData.append('image', file)
        return instance.put<ResponseType<userProfileType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

    },

}
export const authAPI = {
    authMe() {
        return instance.get<ResponseType<authDataType>>(`auth/me`)
    },
    login(email:string,password:string,rememberMe:boolean=false,captcha:boolean) {
        return instance.post<ResponseType<{userId:number}>>(`auth/login` , {
            email,
            password,
            rememberMe,
            captcha
        })
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
    }
}

