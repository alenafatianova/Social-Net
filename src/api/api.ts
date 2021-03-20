import axios from 'axios'
import { photosType, UserProfileType, UserType } from '../types/types'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2fbfa6b3-04a7-447e-953f-70ff4b37ee90'
    }
})

type getUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}
type ResponseType<D = {}> = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: D
}
type savePhotoResponseType = {
    photos: photosType
}
type authMeResponseType = {
    data: {
        id: number,
        login: string,
        email: string
    }
    resultCode: ResultCodeEnum
    messages: number[]
}
type loginResponseType = {
    data: {
        id: number
    }
    resultCode: CaptchaResultCodeEnum | ResultCodeEnum
    messages: number[]
}
export enum ResultCodeEnum {
    success = 0,
    error = 1,
}
export enum CaptchaResultCodeEnum {
    captchaIsRequired = 10
}




export const usersAPI = {
     async getUsers(currentPage = 1 , pageSize = 10) {
      const res = await instance.get<getUsersResponseType>(`users?page=${currentPage} &count=${pageSize}`);
        return res.data;
    },
    followUser(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
    },
    deleteUser(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please use profileAPI instead.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    async getProfile(userId: number) {
        const res = await instance.get(`profile/${userId}`);
        return res.data;
    },
    async getStatus(userId: number) {
        const res = await instance.get(`profile/status/${userId}`);
        return res.data;
    },
    async updateStatus(status: string) {
        const res = await instance.put<ResponseType>('profile/status/', { status });
        return res.data;
    },
    async savePhoto(file: File) {
        const formData = new FormData()
        formData.append('image', file)
        const res = await instance.put<ResponseType<savePhotoResponseType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    },
    async saveProfile(profile: UserProfileType) {
       const res = await instance.put<ResponseType>(`profile`, profile);
        return res.data;
    }
}

export const authAPI = {
    async me() {
        const res = await instance.get<authMeResponseType>(`auth/me`)
        return res.data
    },
    async login(email: string, password: string, rememberMe: boolean, captcha?: null | string) {
        const res = await instance.post<loginResponseType>('auth/login', { email, password, rememberMe, captcha })
        return res.data
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




