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
    }
}

