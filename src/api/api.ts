import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '00a5d8cb-3f04-4b00-8ad7-497f641fdea2'
    }
})

export type apiResponseType<D = {}, RC = ResultCodeEnum > = {
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






