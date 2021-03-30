import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f4c1035b-af05-400d-b82f-113a377ae90b'
    }
})

export type apiResponseType<D = {}, RC = ResultCodeEnum> = {
    resultCode: RC
    messages: Array<string>
    data: D
}

export enum ResultCodeEnum {
    success = 0,
    error = 1,
}
export enum CaptchaResultCodeEnum {
    captchaIsRequired = 10
}






