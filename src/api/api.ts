import axios from 'axios'
import { UserProfileType } from '../redux/profile-reducer';
import { UsersType } from '../redux/users-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2fbfa6b3-04a7-447e-953f-70ff4b37ee90'
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
//    getProfile(userId: number) {
//        console.warn('Obsolete method. Please use profileAPI object instead.')
//     return profileAPI.getProfile(userId)
//    }
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
    },
    savePhoto(file: File) {
        let formData = new FormData()
        formData.append('image', file)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: UserProfileType) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType>('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    }
}
export const securityAPI = {
    captcha() {
        return instance.get(`security/get-captcha-url`)
    }
}




