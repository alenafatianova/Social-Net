import React from 'react'
import style from './Users.module.scss'
import axios from 'axios'
import userAvatar from '../../assets/images/userAvatar.jpg'
import {UsersType} from '../../redux/UsersReducer'

export type  ClassPropsType = {
    addUser: (id: number) => void
    deleteUser: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    users: Array<UsersType> 
    totalUsersCount: number 
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}

export class Users extends React.Component<{
    addUser: (id: number) => void, 
    deleteUser: (id: number) => void,
    setUsers: (users: Array<UsersType>,) => void,
    users: Array<UsersType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void
    }, {}> 
    
    {
    componentDidMount() {
        if (this.props.users.length ===  0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
                &count=${this.props.pageSize}`).then(response => {
             this.props.setUsers(response.data.items)
            })
        }
    }
    
    render () {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i ++ ) {
            pages.push(i);
        }
        
        let onPageChanged = (pageNumber: number) => {
            this.props.setCurrentPage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
            &count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
        })
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                       return  <span className={this.props.currentPage === p ? style.selectedPage : ''}
                       onClick={(e) => {onPageChanged(p)}}
                       >{p}</span>
                    })}
                    
                </div>
                {
                this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img alt="user-avatar" className={style.img} src={u.photos.small != null ? u.photos.small : userAvatar}/>
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