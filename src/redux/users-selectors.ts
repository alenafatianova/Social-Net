import { StateType } from './redux-store';
import {createSelector} from 'reselect'

export const getAllUsers = (state: StateType) => {
    return state.usersPage.users
};
export const getAllUsersSelector = createSelector(getAllUsers, 
    (users) => {return users.filter(u => true)
});


export const getPageSize = (state: StateType) => {
    return state.usersPage.pageSize
};
export const getTotalUsersCount = (state: StateType) => {
    return state.usersPage.totalCount
};
export const getCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage
};
export const getFetching = (state: StateType) => {
    return state.usersPage.isFetching
};
export const getFollowingProgress = (state: StateType) => {
    return state.usersPage.followingInProgress
};