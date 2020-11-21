import { profile } from 'console';
import {newPostType} from './store'

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export type initialProfileStateType = {
  newPostText: string
  postsData: Array<PostsDataType>
  profile: UserProfileType 
}
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
  photos: {
      small: string 
      large: string 
  }
  contacts: {
      github: string | null
      vk: string | null
      facebook: string | null
      instagram: string | null
      twitter: string | null
      website: string | null
      youtube: string | null
      mainLink: string | null
  }
}
let initialProfileState: initialProfileStateType = {
    newPostText: "",
    postsData: [
      { id: 1, post: "Heeeelloooo, guys!", likes: 33 },
      { id: 2, post: "Let's go and eat some pizza!!!", likes: 65 },
      { id: 3, post: "Found 10 dollars today...anyone lost it?", likes: 12 },
    ],
    profile: {} as UserProfileType
}

export const ProfileReducer = (state = initialProfileState, action:ProfileActionsType) => {
    switch(action.type) {
    
  case ADD_POST: {
    
      const newPost: newPostType = {
        id: 5,
        post: state.newPostText,
        likes: 0,
    }
    return {
      ...state,
      newPostText: "",
      postsData: [...state.postsData, newPost]
    }
  }
  case UPDATE_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
  case SET_USER_PROFILE: {
    return {
          ...state,
          profile: action.profile
        }
      }
      default:
        return state;  
  }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const) 
export const changeNewPostCreator = (newText: string)  => ({type: UPDATE_TEXT, newText: newText}  as const)
export const setUserProfile = (profile: UserProfileType ) => ({type: SET_USER_PROFILE, profile: profile} as const)

export type ProfileActionsType = 
            ReturnType <typeof addPostActionCreator> | 
            ReturnType <typeof changeNewPostCreator> |
            ReturnType <typeof setUserProfile>
