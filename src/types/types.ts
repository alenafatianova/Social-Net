
export type PostsDataType = {
    id: number
    post: string
    likes: number
}

export type UserProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    photos: photosType
    contacts: contactsType
    status: string
}

export type contactsType = {
    github: string 
    vk: string 
    facebook: string 
    instagram: string 
    twitter: string 
    website: string 
    youtube: string 
    mainLink: string 
}

export type photosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    userId: number
    followed: boolean
    name: string
    age: number
    location: {country: string, city: string}
    status: string
    photos: photosType
}
export type dialogsType = {
    id: number,
    name: string
}

export type messagesType = {
    id: number,
    message: string
}