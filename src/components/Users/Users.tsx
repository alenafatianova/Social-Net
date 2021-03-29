import React from 'react'
import { Paginator } from '../common/Paginator/Paginator'
import { User } from './User'
import {getAllUsers, getAllUsersSelector, 
        getPageSize, getTotalUsersCount, 
        getCurrentPage, getFollowingProgress} 
from '../../redux/users-selectors'
import { useDispatch, useSelector } from 'react-redux'
import { follow, requestUsers, unfollowUser } from '../../redux/users-reducer'



export const Users = () => {
    
    const users = useSelector(getAllUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowingProgress)
    
    
    const dispatch = useDispatch()
    
    const followUserHandler = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUserHandler = (userId: number) => {
        dispatch(unfollowUser(userId))
    }
    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize))
    }
    return (
        <div>
            <Paginator 
                onPageChanged={onPageChanged} 
                currentPage={currentPage} 
                pageSize={pageSize} 
                totalItemsCount={totalUsersCount}
                /> 
            <div>
                {
                   users.map(u => <User 
                        key={u.userId}  
                        followingInProgress={followingInProgress} 
                        followUser={followUserHandler}
                        unfollowUser={unfollowUserHandler}
                        user={u}
                        
                        />)
                }
                </div>
             </div>
    )
}
