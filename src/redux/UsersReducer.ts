
const ADD_USERS_IN_FRIENDS = 'ADD-USER-IN-FRIENDS'
const WRITE_MESSAGE = 'WRITE-MESSAGE'
const DELETE_USER = 'DELETE-USER'
const SET_USERS = 'SET-USERS'

export type UsersType = {
    users: Array<UsersListType>
}
export type UsersListType = {
    id: number
    followed: boolean
    name: string
    age: number
    location: {country: string, city: string}
    status: string
}
const InitialUsersState: UsersType = {
    users: [] as Array<UsersListType>
}

export const UsersReducer = (state = InitialUsersState, action: UsersActionType) => {
    switch(action.type) {
        case ADD_USERS_IN_FRIENDS: {
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
                users: {...state.users, ...action.users}
            }
        }
        default: 
            return state;
    }
}
type deleteUserActionType = {
    type: typeof DELETE_USER
    userID: number
}
type addUserActionType = {
    type: typeof ADD_USERS_IN_FRIENDS
    userID: number
}
type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersListType>
}
export const deleteUserAC = (userID: number): deleteUserActionType => ({type: DELETE_USER, userID}) as const
export const addUserAC = (userID: number): addUserActionType => ({type: ADD_USERS_IN_FRIENDS, userID}) as const
export const setUsersAC = (users: Array<UsersListType>): setUsersActionType => ({type: SET_USERS, users}) as const

export type UsersActionType = ReturnType <typeof deleteUserAC> | ReturnType <typeof addUserAC> |ReturnType <typeof setUsersAC>