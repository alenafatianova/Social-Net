import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b09d98b6-5011-4001-906e-a668e981300d'
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






