import { InferActionsType, BaseThunkType } from './redux-store';
import { Dispatch } from 'redux';
import { updateObjectInArray } from './handlers/validators/objects-helpers';
import { UserType } from '../types/types';
import { usersAPI } from '../api/users-api';


export const InitialUsersState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>   //array of user's id
}

export type InitialUsersStateType = typeof InitialUsersState

export const UsersReducer = (state = InitialUsersState , action: UsersActionsType): InitialUsersStateType => {
    switch(action.type) {
        case 'FOLLOW_USER': {
            return  {
                ...state, 
                users: updateObjectInArray(state.users, action.id, 'id', {followed: true})
            }
        }
        case 'DELETE_USER': {
           return  {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: false})
            } 
        }
        case 'SET_USERS': {
            return {
                ...state, 
                users: action.users   
            }
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {
                 ...state,
                totalCount: action.totalCount
           }
        }
        case 'SET_PRELOADER': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'FOLLOWING_IN_PROGRESS': {
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

//-- action creators ---
export const actions = {
    deleteUser:  (id: number) => ({type: 'DELETE_USER', id} as const),
    followUser:  (id: number) => ({type: 'FOLLOW_USER', id} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const), 
    setCurrentPage:  (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT',  totalCount} as const),
    setPreloader: (isFetching: boolean) => ({type: 'SET_PRELOADER', isFetching} as const),
    setFollowingInProgress: (isFetching: boolean, id: number ) => ({type: 'FOLLOWING_IN_PROGRESS', id, isFetching} as const)
}

//----------getUsers, followUser, unfollowUser  это санка-------------------------
type UsersThunksType = BaseThunkType<UsersActionsType> 
export type UsersActionsType = InferActionsType<typeof actions>

export const requestUsers = (currentPage: number, pageSize: number ): UsersThunksType => async(dispatch) => {
        dispatch(actions.setCurrentPage(currentPage))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(actions.setPreloader(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
}

const followUnfollowUser =  async(dispatch: Dispatch, id: number, apiMethod: any, actionCreator: (userId: number) => UsersActionsType) => {
    dispatch(actions.setFollowingInProgress(true, id))
    const response = await apiMethod(id) 
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(actions.setFollowingInProgress(false, id))
}

export const unfollowUser = (id: number): UsersThunksType => {
    return async(dispatch: Dispatch) => { 
        followUnfollowUser(dispatch, id, usersAPI.deleteUser.bind(usersAPI), actions.deleteUser)             
    }
}
 
export const follow = (id: number) => {
    return async(dispatch: Dispatch) => {    
        followUnfollowUser(dispatch, id, usersAPI.followUser.bind(usersAPI), actions.followUser)
    }
} 


