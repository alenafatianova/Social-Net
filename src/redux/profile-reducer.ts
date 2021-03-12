import { ThunkAction } from 'redux-thunk';
import {profileAPI, usersAPI} from '../API/API'
import { StateType } from './redux-store';
import {newPostType, ProfilePageType} from './store'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST'

export type initialProfileStateType = {
  
  postsData: Array<PostsDataType>
  profile: null
  status: string
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
  photos: photosType
  contacts: contactsType
  status: string
}

export type profileType = {
  profile: UserProfileType
  status: string
  updateStatus: (status: string) => void
}

export type photosType = {
  small: string
  large: string
}
export type contactsType = {
  github: string | null
  vk: string | null
  facebook: string | null
  instagram: string | null
  twitter: string | null
  website: string | null
  youtube: string | null
  mainLink: string | null
}


let initialProfileState: initialProfileStateType = {
   
    postsData: [
      { id: 1, post: "Heeeelloooo, guys!", likes: 33 },
      { id: 2, post: "Let's go and eat some pizza!!!", likes: 65 },
      { id: 3, post: "Found 10 dollars today...anyone lost it?", likes: 12 },
    ],
    profile: null,
    status: '',
}

export const ProfileReducer = (state: ProfilePageType = initialProfileState, action:ProfileActionsType) => {
    switch(action.type) {
    
  case ADD_POST: {
      const newPost: newPostType = {
        id: 5,
        post: action.newPostText,
        likes: 0,
    }
    return {
      ...state,
      newPostText: '',
      postsData: [...state.postsData, newPost]
    }
  }
  case SET_USER_PROFILE: {
    return {
          ...state,
          profile: action.profile
        }
      }

      case SET_STATUS: {
        return {
          ...state,
          status: action.status
        }
      }
      case DELETE_POST: {
        return {
          ...state,
          postsData: state.postsData.filter(p => p.id != action.postId)
        }
      }
      default:
        return state;  
  }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const) 
export const setUserProfile = (profile: UserProfileType ) => ({type: SET_USER_PROFILE, profile: profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status}as const) 
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)

type ThunksType =  ThunkAction<void, StateType, unknown, ProfileActionsType>

export const getProfile = (userId: number): ThunksType => async(dispatch) => {                       
  let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number): ThunksType => async(dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status: string): ThunksType => async(dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if(response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export type ProfileActionsType = 
            | ReturnType <typeof addPostActionCreator> 
            | ReturnType <typeof setUserProfile> 
            | ReturnType <typeof setStatus> 
            | ReturnType <typeof deletePost>
            
