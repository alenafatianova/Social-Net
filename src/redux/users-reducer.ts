import { StateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { updateObjectInArray } from './handlers/validators/objects-helpers';
import { usersAPI } from '../api/api';
import { UserType } from '../types/types';


const FOLLOW_USER = 'FOLLOW-USER'
const DELETE_USER = 'DELETE-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_PRELOADER = 'SET-PRELOADER'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'



const InitialUsersState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>   //array of user's id
}

export type InitialUsersStateType = typeof InitialUsersState

export const UsersReducer = (state = InitialUsersState , action: UsersActionType): InitialUsersStateType => {
    switch(action.type) {
        case FOLLOW_USER: {
            return  {
                ...state, 
                users: updateObjectInArray(state.users, action.id, 'id', {followed: true})
            }
        }
        case DELETE_USER: {
           return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
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

//--- types for each action creator -----
type deleteUserType = {
    type: typeof DELETE_USER,
    id: number
}
type followUserType = {
    type: typeof FOLLOW_USER,
    id: number
}
type setUsersType = {
    type: typeof SET_USERS,
    users: UserType[]
}
type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalCount: number
}
type setPreloaderType = {
    type: typeof SET_PRELOADER,
    isFetching: boolean
}
type setFollowingInProgressType =  {
    type: typeof FOLLOWING_IN_PROGRESS,
    isFetching: boolean, 
    id: number
}
//-- action creators ---
export const deleteUser = (id: number): deleteUserType => ({type: DELETE_USER, id} as const) 
export const followUser = (id: number): followUserType => ({type: FOLLOW_USER, id} as const) 
export const setUsers = (users: Array<UserType>): setUsersType => ({type: SET_USERS, users} as const) 
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT,  totalCount} as const)
export const setPreloader = (isFetching: boolean): setPreloaderType => ({type: SET_PRELOADER, isFetching} as const)
export const setFollowingInProgress = (isFetching: boolean, id: number ): setFollowingInProgressType => ({
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


export type UsersActionType = 
    | ReturnType <typeof deleteUser> 
    | ReturnType <typeof followUser> 
    | ReturnType <typeof setUsers> 
    | ReturnType <typeof setCurrentPage> 
    | ReturnType <typeof setTotalUsersCount> 
    | ReturnType <typeof setPreloader> 
    | ReturnType <typeof setFollowingInProgress>
