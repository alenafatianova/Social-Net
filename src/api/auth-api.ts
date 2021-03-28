import { CaptchaResultCodeEnum, ResultCodeEnum, instance, apiResponseType } from "./api"

type authMeResponseType = {
    id: number,
    login: string,
    email: string
}
type loginResponseType = {
   id: number
}

export const authAPI = {
    me() {
        return instance.get<apiResponseType<authMeResponseType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance.post<apiResponseType<loginResponseType, CaptchaResultCodeEnum | ResultCodeEnum>>('auth/login', 
            { email, password, rememberMe, captcha }).then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login')
    }
}