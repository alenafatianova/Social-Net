import React from 'react'
import { Paginator } from '../common/Paginator/Paginator'
import { User } from './User'
import {getAllUsers, getAllUsersSelector, 
        getPageSize, getTotalUsersCount, 
        getCurrentPage, getFollowingProgress} 
from '../../redux/users-selectors'
import { useDispatch, useSelector } from 'react-redux'
import { follow, requestUsers, unfollowUser } from '../../redux/users-reducer'

type UsersPropsType = {
 
    onPageChanged: (pageNumber: number) => void
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
}


export const Users = (props: UsersPropsType) => {
    
    const users = useSelector(getAllUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowingProgress)
    const filter = useSelector(getAllUsersSelector)
    
    const dispatch = useDispatch()
    
    const followUserHandler = (id: number) => {
        dispatch(follow(id))
    }
    const unfollowUserHandler = (id: number) => {
        dispatch(unfollowUser(id))
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
                        key={u.id}  
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
