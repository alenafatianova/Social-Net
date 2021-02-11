import { StateType } from './redux-store';
import { usersAPI } from '../API/API'
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { updateObjectInArray } from './handlers/validators/objects-helpers';


const FOLLOW_USER = 'FOLLOW-USER'
const DELETE_USER = 'DELETE-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_PRELOADER = 'SET-PRELOADER'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

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
    followingInProgress: Array<number>
}

const InitialUsersState: InitialStateType = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] 
}

export type UsersActionType = 
    | ReturnType <typeof deleteUser> 
    | ReturnType <typeof followUser> 
    | ReturnType <typeof setUsers> 
    | ReturnType <typeof setCurrentPage> 
    | ReturnType <typeof setTotalUsersCount> 
    | ReturnType <typeof setPreloader> 
    | ReturnType <typeof setFollowingInProgress>

export const UsersReducer = (state = InitialUsersState , action: UsersActionType): InitialStateType => {
    switch(action.type) {
        case FOLLOW_USER: {
            return  {
                ...state, 
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userID) {
                //         return {...u, followed: true }
                //     }
                //     return u;
                // })
            }
        }
        case DELETE_USER: {
           return  {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
                // users: state.users.map(u => {
                //     if (u.id === action.userID) {
                //         return {...u, followed: false}
                //     }
                //     return u
                // })
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
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.id]
                : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default: 
            return state;
    }
}

export const deleteUser = (id: number) => ({type: DELETE_USER, userID: id} as const) 
export const followUser = (id: number) => ({type: FOLLOW_USER, userID: id} as const) 
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users} as const) 
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT,  totalCount} as const)
export const setPreloader = (isFetching: boolean) => ({type: SET_PRELOADER, isFetching} as const)
export const setFollowingInProgress = (isFetching: boolean, id: number, ) => ({
    type: FOLLOWING_IN_PROGRESS, id, isFetching} as const
)


//----------getUsers, followUser, unfollowUser  это санка-------------------------
type UsersThunksType = ThunkAction<void, StateType, unknown, UsersActionType>


export const requestUsers = (currentPage: number, pageSize: number ): UsersThunksType => async(dispatch) => {                                               
        dispatch(setPreloader(true))
        dispatch(setCurrentPage(currentPage))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setPreloader(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowUser =  async(dispatch: Dispatch, id: number, apiMethod: any, actionCreator: any) => {
    dispatch(setFollowingInProgress(true, id))
    const response = await apiMethod(id)
        
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(setFollowingInProgress(false, id))
}

export const unfollowUser = (id: number): UsersThunksType => {
    return async(dispatch) => { 
        followUnfollowUser(dispatch, id, usersAPI.deleteUser.bind(usersAPI), deleteUser)             
    }
}
 
export const follow = (id: number): UsersThunksType => {
    return async(dispatch) => {    
        followUnfollowUser(dispatch, id, usersAPI.followUser.bind(usersAPI), followUser)
    }
}

