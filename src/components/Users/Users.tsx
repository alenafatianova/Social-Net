import React from 'react'
import { Paginator } from '../common/Paginator/Paginator'
import { User } from './User'
import {getAllUsers, getAllUsersSelector, 
        getPageSize, getTotalUsersCount, 
        getCurrentPage, getFetching, getFollowingProgress} 
from '../../redux/users-selectors'
import { useSelector } from 'react-redux'

type UsersPropsType = {
    portionSize: number
    onPageChanged: (pageNumber: number) => void
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
}


export const Users = (props: UsersPropsType) => {
    const users = useSelector(getAllUsers)
    const totalItemsCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowingProgress)
    const filter = useSelector(getAllUsersSelector)
    return (
        <div>
            <Paginator 
                onPageChanged={props.onPageChanged} 
                currentPage={currentPage} 
                pageSize={pageSize} 
                totalItemsCount={totalItemsCount}
                portionSize={props.portionSize}/> 
            <div>
                {
                   users.map(u => <User 
                        key={u.id}  
                        followingInProgress={followingInProgress} 
                        unfollowUser={props.unfollowUser}
                        followUser={props.followUser}
                        user={u}
                        />)
                }
                </div>
             </div>
    )
}
