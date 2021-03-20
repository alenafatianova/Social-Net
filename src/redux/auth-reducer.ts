import { authAPI, CaptchaResultCodeEnum, ResultCodeEnum, securityAPI } from './../api/api'
import { StateType } from "./redux-store"
import { ThunkAction } from "redux-thunk"
import { FormAction, stopSubmit } from "redux-form"


const SET_USER_DATA = "social-net/auth/SET_USER_DATA"
const GET_CAPTCHA_URL = "social-net/auth/GET_CAPTCHA_URL"

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

export type setAuthDataType = {
  type: typeof SET_USER_DATA;
  payload: setAuthDataACPayloadType;
};

export const authReducer = ( state = initialDataState, action: authTypeActionType): initialDataStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      case GET_CAPTCHA_URL: {
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

export const setAuthData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => 
({type: SET_USER_DATA,payload: { userId, email, login, isAuth }, } as const);

export const getCaptchaURL = (url: string) => ({type: GET_CAPTCHA_URL, payload: {url}} as const)


export type authTypeActionType = ReturnType<typeof setAuthData> | ReturnType <typeof getCaptchaURL>
type ThunkType = ThunkAction<void, StateType, unknown, authTypeActionType | FormAction>;

export const authData = (): ThunkType => async(dispatch) => {
    let meData = await authAPI.me()
    if (meData.resultCode === ResultCodeEnum.success) {
      let { id, email, login } = meData.data;
      dispatch(setAuthData(id, email, login, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async(dispatch) => {
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

export const logout = (): ThunkType => async(dispatch) => {
   let response = await authAPI.logout()
      if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
    }
}
export const getCaptcha = (): ThunkType => async(dispatch) => {
  const response = await securityAPI.captcha()
  const captchaURL = response.data.url
  dispatch(getCaptchaURL(captchaURL))
}