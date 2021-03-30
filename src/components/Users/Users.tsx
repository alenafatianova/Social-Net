import React from 'react'
import { Paginator } from '../common/Paginator/Paginator'
import { User } from './User'
import {getAllUsers, 
        getPageSize, getTotalUsersCount, 
        getCurrentPage, getFollowingProgress, getUsersFilter} 
from '../../redux/users-selectors'
import { useDispatch, useSelector } from 'react-redux'
import { FilterType, follow, requestUsers, unfollowUser } from '../../redux/users-reducer'
import { UserSearchForm } from '../common/SearchForm/UserSearchForm'


export const Users: React.FC = React.memo(() => {
    
    const users = useSelector(getAllUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowingProgress)
    const filter = useSelector(getUsersFilter)
    
    const dispatch = useDispatch()
    
    const followUserHandler = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUserHandler = (userId: number) => {
        dispatch(unfollowUser(userId))
    }
    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    return (
        <div>
            <div> 
                <UserSearchForm onFilterChanged={onFilterChanged}/>
            </div>
            <Paginator 
                onPageChanged={onPageChanged} 
                currentPage={currentPage} 
                pageSize={pageSize} 
                totalItemsCount={totalUsersCount}
                /> 
            <div>
                {
                   users.map(u =>
                     <User 
                        key={u.userId}  
                        followingInProgress={followingInProgress} 
                        followUser={followUserHandler}
                        unfollowUser={unfollowUserHandler}
                        user={u}
                        />
                    )
                }
                </div>
             </div>
    )
})
