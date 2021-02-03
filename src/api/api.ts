import axios from 'axios'
import { UsersType } from '../redux/users-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '56544b76-88d2-4f75-9d49-5180561089a7'
    }
})

type getUsersResponseType = {
    items: UsersType[]
    totalCount: number
    error: string
}
type ResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

export const usersAPI = {
    async getUsers(currentPage: number, pageSize: number) {
        const response = await instance.get<getUsersResponseType>(`users?page=${currentPage} &count=${pageSize}`);
        return response.data;
    },
    followUser(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`, {})
    },
    deleteUser(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
   getProfile(userId: number) {
       console.warn('Obsolete method. Please use profileAPI object instead.')
    return profileAPI.getProfile(userId)
   }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status})
    } 
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, remembreMe: boolean) {
        return instance.post<ResponseType>('auth/login', {email, password, remembreMe})
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    }
}





