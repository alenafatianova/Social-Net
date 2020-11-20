
const ADD_USER = 'ADD-USER-IN-FRIENDS'
const DELETE_USER = 'DELETE-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_PRELOADER = 'SET-PRELOADER'


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
    totalCount: number
    currentPage: number
    isFetching: boolean
}

const InitialUsersState: InitialStateType = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
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
        case SET_TOTAL_USERS_COUNT: {
            return {
                 ...state,
                totalCount: action.totalCount
           }
        }
        case SET_PRELOADER: {
            return {
                ...state,
                isFetching: action.isFetching
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
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT,  totalCount} as const)
export const setPreloaderAC = (isFetching: boolean) => ({type: SET_PRELOADER, isFetching} as const)

export type UsersActionType = 
            ReturnType <typeof deleteUserAC> | 
            ReturnType <typeof addUserAC> | 
            ReturnType <typeof setUsersAC> |
            ReturnType <typeof setCurrentPageAC> |
            ReturnType <typeof setTotalUsersCountAC> |
            ReturnType <typeof setPreloaderAC>