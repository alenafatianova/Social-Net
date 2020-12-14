import { authAPI } from '../API/API'


const SET_USER_DATA = 'SET_USER_DATA';

export let initialDataState: initialDataStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
}
export type initialDataStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
}
export type setAuthDataACPayloadType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

export type  setAuthDataACType = {
    type: typeof SET_USER_DATA,
    payload: setAuthDataACPayloadType
}


export const authReducer = (state = initialDataState, action: authTypeActionType): initialDataStateType => {
    switch(action.type) {
        case SET_USER_DATA: 
           return {
               ...state, 
               ...action.payload,
               isAuth: true,
            }
           default: {
               return {
                    ...state
                }
            }   
    }
}

export const setAuthData = (id: number, email: string, login: string, isAuth: boolean): setAuthDataACType => ({
    type: 'SET_USER_DATA',  payload: {id, email, login, isAuth}} as const)

export type authTypeActionType = ReturnType <typeof setAuthData>

export const authData = () => {
    return (dispatch: any) => {                                             //---------any------------------------
        authAPI.me().then(response => { 
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                    dispatch(setAuthData(id, email, login, true))
            }
        }
     )
    }
}