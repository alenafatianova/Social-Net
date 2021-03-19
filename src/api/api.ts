import axios from 'axios'
import { photosType, UserProfileType } from '../redux/profile-reducer';
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
type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
type savePhotoResponseType = {
    photos: photosType
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
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha?: null | string) {
        return instance.post<ResponseType>('auth/login', {email, password, rememberMe, captcha})
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




