import React from 'react'
import { UsersType } from '../../redux/users-reducer'
import { Paginator } from '../common/Paginator/Paginator'
import { User } from './User'



type UsersPropsType = {
    totalUsersCount: number 
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
}


export const Users = React.memo((props: UsersPropsType) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   
    let pages = []
    for (let i = 1; i <= pagesCount; i ++ ) {
        pages.push(i);
    }

    return (
        <div>
            <Paginator 
                onPageChanged={props.onPageChanged} 
                currentPage={props.currentPage} 
                pageSize={props.pageSize} 
                totalUsersCount={props.totalUsersCount}
                />
                {
                props.users.map(u => <User 
                        key={u.id}  
                        followingInProgress={props.followingInProgress} 
                        unfollowUser={props.unfollowUser}
                        followUser={props.followUser}
                        user={u}
                        />
                       
                    )
                }
             </div>
    )
})
