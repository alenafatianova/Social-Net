import { Dispatch } from 'redux';
import { FormAction, stopSubmit } from 'redux-form';
import { profileAPI } from '../api/profile-api';
import { photosType, PostsDataType, UserProfileType } from '../types/types';
import { BaseThunkType, InferActionsType, StateType } from './redux-store';


export const initialProfileState = {
    postsData: [
      { id: 1, post: "Heeeelloooo, guys!", likes: 33 },
      { id: 2, post: "Let's go and eat some pizza!!!", likes: 65 },
      { id: 3, post: "Found 10 dollars today...anyone lost it?", likes: 12 },
    ] as Array <PostsDataType>,
    profile: null as UserProfileType | null,
    status: '', 
}
export type initialProfileStateType = typeof initialProfileState
export type ProfileActionsType = InferActionsType<typeof ProfileActions>
type ProfileThunkType = BaseThunkType<ProfileActionsType |FormAction >

export const ProfileReducer = (state = initialProfileState, action: ProfileActionsType): initialProfileStateType => {
    switch(action.type) {
  case 'ADD_POST': {
      const newPost = {
        id: 5,
        post: action.newPostText,
        likes: 0,
    }
    return {
      ...state,
      postsData: [...state.postsData, newPost]
    }
  }
  case 'SET_USER_PROFILE': {
    return {
          ...state,
          profile: action.profile
        }
      }
      case 'SET_STATUS': {
        return {
          ...state,
          status: action.status
        }
      }
      case 'DELETE_POST': {
        return {
          ...state,
          postsData: state.postsData.filter(p => p.id !== action.postId)
        }
      }
      case 'SAVE_PHOTO_SUCCESS': 
        return {...state, profile: {...state.profile, photos: action.photos} as UserProfileType}
      default:
        return state;  
  }
}



//--- Action Creators
export const ProfileActions = {
  addPost:  (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),
  setUserProfile: (profile: UserProfileType ) => ({type: 'SET_USER_PROFILE', profile: profile} as const),
  setStatus: (status: string) => ({type: 'SET_STATUS', status}as const),
  deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const),
  savePhotoSuccess:  (photos: photosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const),
}



//--- redux-thunks -----
export const getProfile = (userId: number): ProfileThunkType => async(dispatch: Dispatch) => {
  try {
    let data = await profileAPI.getProfile(userId)
    dispatch(ProfileActions.setUserProfile(data))
  } catch(error) {
    console.log(error)}
}

export const getStatus = (userId: number): ProfileThunkType => async(dispatch: Dispatch) => {
  try {
    let data = await profileAPI.getStatus(userId)
    dispatch(ProfileActions.setStatus(data))
  } catch(err) {
    console.log(err)
  }
}

export const updateStatus = (status: string): ProfileThunkType => async(dispatch) => {
  try {
    let data = await profileAPI.updateStatus(status)
    if(data.resultCode === 0) {
      dispatch(ProfileActions.setStatus(status))
    }
  } catch (err) {
    console.log(err)
  }
}
export const savePhoto = (file: File): ProfileThunkType => async(dispatch) => {
  try {
    let data = await profileAPI.savePhoto(file)
    if(data.resultCode === 0) {
    dispatch(ProfileActions.savePhotoSuccess(data.data.photos))
    }
  } catch(err) {
    console.log(err)
  }
}
export const saveProfile = (profile: UserProfileType): ProfileThunkType => async(dispatch, getState: () => StateType) => {
  const userId = getState().auth.userId
  const data = await profileAPI.saveProfile(profile)
  if(data.resultCode === 0) {
      if(userId != null) {
        dispatch(getProfile(userId))
      } else {
        throw new Error ('userID cannot be null')
      } 
    } else {
      dispatch(stopSubmit('edit-profile', {_error: data.messages[0] }))
      return Promise.reject(data.messages[0])
    }
  }


 
            
