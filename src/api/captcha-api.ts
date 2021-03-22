import { instance } from "./api"

export const securityAPI = {
    captcha() {
        return instance.get(`security/get-captcha-url`)
    }
}