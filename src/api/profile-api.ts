import { photosType, UserProfileType } from "../types/types"
import { apiResponseType, instance } from "./api"

type savePhotoResponseType = {
    photos: photosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
       return instance.put<apiResponseType>('profile/status/', {status}).then(res => res.data)
    },
    savePhoto(file: File) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put<apiResponseType<savePhotoResponseType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveProfile(profile: UserProfileType) {
       return instance.put<apiResponseType>(`profile`, profile).then(res => res.data)
    }
}