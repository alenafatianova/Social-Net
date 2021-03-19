import { FormAction, stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
import { profileAPI } from '../api/api';
import { photosType, PostsDataType, UserProfileType } from '../types/types';
import { StateType } from './redux-store';



const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


const initialProfileState = {
    postsData: [
      { id: 1, post: "Heeeelloooo, guys!", likes: 33 },
      { id: 2, post: "Let's go and eat some pizza!!!", likes: 65 },
      { id: 3, post: "Found 10 dollars today...anyone lost it?", likes: 12 },
    ] as Array <PostsDataType>,
    profile: null as UserProfileType | null,
    status: '', 
    newPostText: '',
}
export type initialProfileStateType = typeof initialProfileState

export const ProfileReducer = (state = initialProfileState, action: ProfileActionsType): initialProfileStateType => {
    switch(action.type) {
  case ADD_POST: {
      const newPost = {
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
          postsData: state.postsData.filter(p => p.id !== action.postId)
        }
      }
      case SAVE_PHOTO_SUCCESS: 
        return {...state, profile: {...state.profile, photos: action.photos} as UserProfileType}
      default:
        return state;  
  }
}


//----types for Action Creators
type addpostActionType = {
  type: typeof ADD_POST,
  newPostText: string
}
type setUserProfileType = {
  type: typeof SET_USER_PROFILE,
  profile: UserProfileType
}
type setStatusType = {
  type: typeof SET_STATUS,
  status: string
}
type deletePostType = {
  type: typeof DELETE_POST,
  postId: number
}
type savePhotoType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: photosType
}


//--- Action Creators
export const addPostActionCreator = (newPostText: string): addpostActionType => ({type: ADD_POST, newPostText} as const) 
export const setUserProfile = (profile: UserProfileType ): setUserProfileType => ({type: SET_USER_PROFILE, profile: profile} as const)
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status}as const) 
export const deletePost = (postId: number): deletePostType => ({type: DELETE_POST, postId} as const)
export const savePhotoSuccess = (photos: photosType): savePhotoType => ({type: SAVE_PHOTO_SUCCESS, photos} as const)



//--- redux-thunks -----
export const getProfile = (userId: number): ThunksType => async(dispatch) => {                       
  let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const getStatus = (userId: number): ThunksType => async(dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}
export const updateStatus = (status: string): ThunksType => async(dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if(data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const savePhoto = (file: File): ThunksType => async(dispatch) => {
  let data = await profileAPI.savePhoto(file)
  if(data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos))
  }
}
export const saveProfile = (profile: UserProfileType): ThunksType => async(dispatch, getState: () => StateType) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)
  if(response.resultCode === 0) {
      if(userId != null) {
        dispatch(getProfile(userId))
      } else {
        throw new Error ('userID cannot be null')
      } 
    } else {
      dispatch(stopSubmit('edit-profile', {_error: response.messages[0]}))
    }
  }

type ThunksType =  ThunkAction<void, StateType, unknown, ProfileActionsType | FormAction>


//---- common ActionCreators type ------
export type ProfileActionsType = 
            | ReturnType <typeof addPostActionCreator> 
            | ReturnType <typeof setUserProfile> 
            | ReturnType <typeof setStatus> 
            | ReturnType <typeof deletePost>
            | ReturnType <typeof savePhotoSuccess>
            
