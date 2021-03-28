import { instance } from "./api"

type getCaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    captcha() {
        return instance.get<getCaptchaUrlResponseType>(`security/get-captcha-url`).then(res => res.data)
    }
}