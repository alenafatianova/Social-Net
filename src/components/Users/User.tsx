import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../../styles/Users.module.css'
import userAvatar from '../../assets/images/userAvatar.jpg'
import { UserType } from '../../types/types'


type userTypeProps = {
    user: UserType
    followingInProgress: number[]
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
   
}

export const User: React.FC<userTypeProps> = React.memo(({user, followingInProgress, followUser, unfollowUser}) => {
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
                                        onClick = {() => unfollowUser(user.id)}>Delete</button>
                                    : <button disabled={followingInProgress.some(id => id === user.id)} 
                                        onClick={() => followUser(user.id)}>Add</button> 
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
