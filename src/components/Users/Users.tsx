import axios  from 'axios'
import React from 'react'
import { UsersListType } from '../../redux/UsersReducer'
import style from './Users.module.scss'
import userAvatar from '../../assets/images/userAvatar.jpg'

export type UsersPropsType = {
    addUser: (userID: number) => void
    deleteUser: (userID: number) => void
    setUsers: (users: Array<UsersListType>) => void
    usersArray: Array<UsersListType>
}

export default function Users(props: UsersPropsType) {
   
    let getUsers = () => {
    if (props.usersArray.length ===  0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
         props.setUsers(response.data.items)
        })
   }
}
    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            {
            props.usersArray.map(u => 
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.img} src={u.photos.small != null ? u.photos.small : userAvatar}/>
                        </div>
                        <div>
                            {u.followed 
                            ? <button onClick={() => props.addUser(u.id)}>Add to friends</button> 
                            : <button onClick={() => props.deleteUser(u.id)}>Your friend</button>}
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
                </div>)
            }
        </div>
    )
}
