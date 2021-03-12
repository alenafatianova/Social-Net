import React from 'react'
import userAvatar from '../../assets/images/userAvatar.jpg'
import style from './Users.module.css'
import { UsersType } from '../../redux/users-reducer'
import { NavLink } from 'react-router-dom'
import { Paginator } from '../common/Paginator/Paginator'



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
                props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img alt="user-avatar" className={style.img} src={u.photos.small != null ? u.photos.small : userAvatar}/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    u.followed 
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                        onClick = {() => {props.unfollowUser(u.id)}}>Delete</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                        onClick={() => {props.followUser(u.id)}}>Add</button> 
                                }
                            </div>
                        </span>
                        <span>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </div>
                    )
                }
            </div>
    )
})
