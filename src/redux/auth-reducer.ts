
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

export const authReducer = (state = initialDataState, action: authReducerActionType): initialDataStateType => {
    switch(action.type) {
        case SET_USER_DATA: 
           return {
               ...state, 
               ...action.data,
               isAuth: true,
           }
           default: {
               return {
                    ...state
                }
           }
    }
}

export const setAuthDataAC = (id: number, email: string, login: string) => ({type: 'SET_USER_DATA', data: {id, email, login}} as const)

export type authReducerActionType = ReturnType<typeof setAuthDataAC> 