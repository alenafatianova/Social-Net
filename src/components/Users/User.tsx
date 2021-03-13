import React from 'react'
import { NavLink } from 'react-router-dom'
import { UsersType } from '../../redux/users-reducer'
import style from './Users.module.css'
import userAvatar from '../../assets/images/userAvatar.jpg'

type userTypeProps = {
    user: UsersType
    followingInProgress: number[]
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
}

export const User: React.FC<userTypeProps> = React.memo(({user, followingInProgress, unfollowUser, followUser}) => {
    return (
        <div>
           <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt="user-avatar" className={style.img} src={user.photos.small != null ? user.photos.small : userAvatar}/>
                    </NavLink>
                        </div>
                            <div>
                                {
                                    user.followed 
                                    ? <button disabled={followingInProgress.some(id => id === user.id)} 
                                        onClick = {() => {unfollowUser(user.id)}}>Delete</button>
                                    : <button disabled={followingInProgress.some(id => id === user.id)} 
                                        onClick={() => {followUser(user.id)}}>Add</button> 
                                }
                            </div>
                </span>
                    <span>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                    </span>
            </div>
    )
})
