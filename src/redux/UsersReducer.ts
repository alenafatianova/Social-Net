
const ADD_USER = 'ADD-USER-IN-FRIENDS'
const DELETE_USER = 'DELETE-USER'
const SET_USERS = 'SET-USERS'

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
}

const InitialUsersState: InitialStateType = {
    users: [] as Array<UsersType>
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
                users: state.users.map( u => {
                    if(u.id === action.userID) {
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
        default: 
            return state;
    }
}

export const deleteUserAC = (userID: number) => ({type: DELETE_USER, userID}) as const
export const addUserAC = (userID: number) => ({type: ADD_USER, userID}) as const
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users}) as const

export type UsersActionType = 
            ReturnType <typeof deleteUserAC> | 
            ReturnType <typeof addUserAC> | 
            ReturnType <typeof setUsersAC>