import {  CaptchaResultCodeEnum, ResultCodeEnum } from './../api/api'
import { BaseThunkType, InferActionsType } from "./redux-store"
import { FormAction, stopSubmit } from "redux-form"
import { authAPI } from '../api/auth-api'
import { Dispatch } from 'redux'
import { securityAPI } from '../api/captcha-api'

export let initialDataState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isFetching: true,
    isAuth: false,
    captchaURL: null as string | null,
}
export type initialDataStateType = typeof initialDataState

export type setAuthDataACPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
};



export const authReducer = ( state = initialDataState, action: AuthActionsType): initialDataStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      case 'GET_CAPTCHA_URL': {
      return {
        ...state,
        ...action.payload,
      }
    }
    default: {
      return state
    }
  }
};

export const authActions = {
  setAuthData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => 
  ({type: 'SET_USER_DATA',payload: { userId, email, login, isAuth }, } as const),
  getCaptchaURL: (url: string) => ({type: 'GET_CAPTCHA_URL', payload: {url}} as const)
}

type AuthThunkType = BaseThunkType<AuthActionsType | FormAction >
type AuthActionsType = InferActionsType<typeof authActions>

export const authData = (): AuthThunkType => async(dispatch) => {
    let meData = await authAPI.me()
    if (meData.resultCode === ResultCodeEnum.success) {
      let { id, login, email,  } = meData.data;
      dispatch(authActions.setAuthData(id, email, login,  true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AuthThunkType => async(dispatch) => {
  let loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodeEnum.success) {
      dispatch(authData());
    } else {
      if (loginData.resultCode === CaptchaResultCodeEnum.captchaIsRequired) {
        dispatch(getCaptcha())
      }
      let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error occured";
      dispatch(stopSubmit("login", { _error: message }));
    }
};

export const logout = (): AuthThunkType => async(dispatch: Dispatch) => {
   let response = await authAPI.logout()
      if (response.data.resultCode === 0) {
        dispatch(authActions.setAuthData(null, null, null, false));
    }
}
export const getCaptcha = (): AuthThunkType => async(dispatch) => {
  const data = await securityAPI.captcha()
  const captchaURL = data.url
  dispatch(authActions.getCaptchaURL(captchaURL))
}