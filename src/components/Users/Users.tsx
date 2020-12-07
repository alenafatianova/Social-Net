import React from 'react'
import userAvatar from '../../assets/images/userAvatar.jpg'
import style from './Users.module.scss'
import {UsersType} from '../../redux/users-reducer'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import { followUser } from '../../api/api'


type UsersPropsType = {
    totalUsersCount: number 
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    deleteUser: (id: number) => void
    addUser: (id: number) => void
    onPageChanged: (pageNumber: number) => void
}


export function Users(props: UsersPropsType) {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i ++ ) {
        pages.push(i);
    }

    return (
        <div>
               <div>
                    {pages.map(p => {
                       return  <span key={p} className={props.currentPage === p ? style.selectedPage : ''}
                       onClick={(e) => {props.onPageChanged(p)}}
                       >{p}</span>
                    })}
                    
                </div>
                {
                props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img alt="user-avatar" className={style.img} src={u.photos.small != null ? u.photos.small : userAvatar}/>
                                </NavLink>
                                
                            </div>
                            <div>
                                {u.followed 
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'd6da0b4d-b16d-42bc-a142-317d3b9eca82'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.deleteUser(u.id)
                                        }
                                    })
                                }}>Delete</button>
                                
                                :<button onClick={() => {
                                    followUser(u.id).then(data => {
                                       if (data.resultCode === 0) {
                                        props.addUser(u.id)
                                    }   
                                })
                                }}>Add</button> 
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
}
