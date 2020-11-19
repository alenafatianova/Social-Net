import React from 'react'
import style from './Users.module.scss'
import axios from 'axios'
import userAvatar from '../../assets/images/userAvatar.jpg'
import { UsersType } from '../../redux/UsersReducer'

export type  ClassPropsType = {
    addUser: (id: number) => void
    deleteUser: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    users: Array<UsersType> 
    totalUsersCount: number 
    pageSize: number
}

export class Users extends React.Component<{
    addUser: (id: number) => void, 
    deleteUser: (id: number) => void,
    setUsers: (users: Array<UsersType>,) => void,
    users: Array<UsersType>,
    totalUsersCount: number,
    pageSize: number
    }, {}> 
    
    {
    componentDidMount() {
        if (this.props.users.length ===  0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
             this.props.setUsers(response.data.items)
            })
        }
    }
    render () {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize

        return (
            <div>
                <div>
                    <span>1</span>
                    <span>2</span>
                    <span className={style.selectedPage}>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {
                this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img className={style.img} src={u.photos.small != null ? u.photos.small : userAvatar}/>
                            </div>
                            <div>
                                {u.followed 
                                ? <button onClick={() => this.props.deleteUser(u.id)}>Delete</button>
                                :<button onClick={() => this.props.addUser(u.id)}>Add</button> 
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
                    </div>)
                }
            </div>
        )
    }
}