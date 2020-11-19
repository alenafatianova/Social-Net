
const ADD_USER = 'ADD-USER-IN-FRIENDS'
const DELETE_USER = 'DELETE-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

export type UsersType = {
    id: number
    followed: boolean
    name: string
    age: number
    location: {country: string, city: string}
    status: string
    photos: {
        small: string, 
        large: string
    }
}
export type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const InitialUsersState: InitialStateType = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 5
}

export const UsersReducer = (state = InitialUsersState , action: UsersActionType): InitialStateType => {
    switch(action.type) {
        case ADD_USER: {
            return  {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true }
                    }
                    return u;
                })
            }
        }
       
        case DELETE_USER: {
           return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            } 
        }
        case SET_USERS: {
            return {
                ...state, 
                users: action.users   
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        default: 
            return state;
    }
}

export const deleteUserAC = (id: number) => ({type: DELETE_USER, userID: id} as const) 
export const addUserAC = (id: number) => ({type: ADD_USER, userID: id} as const) 
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users} as const) 
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)

export type UsersActionType = 
            ReturnType <typeof deleteUserAC> | 
            ReturnType <typeof addUserAC> | 
            ReturnType <typeof setUsersAC> |
            ReturnType <typeof setCurrentPageAC>