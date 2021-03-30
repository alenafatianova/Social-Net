import { InferActionsType, BaseThunkType } from './redux-store';
import { Dispatch } from 'redux';
import { updateObjectInArray } from './handlers/validators/objects-helpers';
import { UserType } from '../types/types';
import { usersAPI } from '../api/users-api';
import { apiResponseType } from '../api/api';


export const InitialUsersState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,   //array of user's id
    filter: {
        term: '', 
        friend: null as null | boolean
    }
}

export type InitialUsersStateType = typeof InitialUsersState

export const UsersReducer = (state = InitialUsersState , action: UsersActionsType): InitialUsersStateType => {
    switch(action.type) {
        case 'FOLLOW_USER': {
            return  {
                ...state, 
                users: updateObjectInArray(state.users, action.userId, 'userId', {followed: true})
            }
        }
        case 'DELETE_USER': {
           return  {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'userId', {followed: false})
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
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case 'SET_TERM_FILTER': {
            return {
                ...state,
                filter: action.payload.filter,
                
            }
        }
        default: 
            return state;
    }
}

//-- action creators ---
export const actions = {
    deleteUser:  (userId: number) => ({type: 'DELETE_USER', userId} as const),
    followUser:  (userId: number) => ({type: 'FOLLOW_USER', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const), 
    setCurrentPage:  (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT',  totalCount} as const),
    setPreloader: (isFetching: boolean) => ({type: 'SET_PRELOADER', isFetching} as const),
    setFollowingInProgress: (isFetching: boolean, userId: number ) => ({type: 'FOLLOWING_IN_PROGRESS', userId, isFetching} as const),
    setTerm: (filter: FilterType) => ({type: 'SET_TERM_FILTER', payload: {filter}} as const)
}

//----------getUsers, followUser, unfollowUser  это санка-------------------------
type UsersThunksType = BaseThunkType<UsersActionsType> 
type UsersActionsType = InferActionsType<typeof actions>
export type FilterType = typeof InitialUsersState.filter

export const requestUsers = (currentPage: number, pageSize: number, filter: FilterType ): UsersThunksType => async(dispatch, getState) => {
        dispatch(actions.setPreloader(true))
        dispatch(actions.setCurrentPage(currentPage))
        dispatch(actions.setTerm(filter))

        const data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
        dispatch(actions.setPreloader(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
}

const _followUnfollowFlow = async (dispatch: Dispatch<UsersActionsType>, userId: number, apiMethod: (userId: number) => Promise<apiResponseType>,
    actionCreator: (userId: number) => UsersActionsType) => {
        try {
            dispatch(actions.setFollowingInProgress(true, userId))
            let response = await apiMethod(userId)
        
            if (response.resultCode === 0) {
                dispatch(actionCreator(userId))
            }
            dispatch(actions.setFollowingInProgress(false, userId))
        } catch(err) {
            console.log(err)
        }
}

export const unfollowUser = (userId: number): UsersThunksType => {
    return async(dispatch) => { 
        try {
            await _followUnfollowFlow(dispatch, userId, usersAPI.deleteUser.bind(usersAPI), actions.deleteUser) 
        } catch(err)  {
            console.log(err)
        }            
    }
}
 
export const follow = (userId: number): UsersThunksType => {
    return async(dispatch) => {   
        try {
            await _followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), actions.followUser)
        } catch(err) {
            console.log(err)
        }
    }
} 


