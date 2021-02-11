import { StateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { authAPI } from "../API/API";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "social-net/auth/SET_USER_DATA";

export let initialDataState: initialDataStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
};
export type initialDataStateType = {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
    isFetching: boolean;
};
export type setAuthDataACPayloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type setAuthDataType = {
  type: typeof SET_USER_DATA;
  payload: setAuthDataACPayloadType;
};

export const authReducer = ( state = initialDataState, action: authTypeActionType): initialDataStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export const setAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => 
({type: SET_USER_DATA,payload: { id, email, login, isAuth }, } as const);

export type authTypeActionType = ReturnType<typeof setAuthData>;

type authThunkType = ThunkAction<void, StateType, unknown, authTypeActionType>;

export const authData = (): authThunkType => async(dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthData(id, email, login, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean): authThunkType => async(dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(authData());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error occured";
      dispatch(stopSubmit("login", { _error: message }));
    }
};

export const logout = (): authThunkType => async(dispatch) => {
   let response = await authAPI.logout()
      if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
    }
}
