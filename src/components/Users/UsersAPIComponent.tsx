import React from 'react'
import axios from 'axios'
import {UsersType} from '../../redux/UsersReducer'
import {Users} from './Users'

export type  ClassPropsType = {
    addUser: (id: number) => void
    deleteUser: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    users: Array<UsersType> 
    totalUsersCount: number 
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class UsersAPIComponent extends React.Component<{
    addUser: (id: number) => void, 
    deleteUser: (id: number) => void,
    setUsers: (users: Array<UsersType>,) => void,
    users: Array<UsersType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalCount: number) => void
    }, {}> 
    
    {
    componentDidMount() {
        if (this.props.users.length ===  0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
                &count=${this.props.pageSize}`).then(response => {
             this.props.setUsers(response.data.items)
             this.props.setTotalUsersCount(response.data.totalCount)
            })
        }
    }
     onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`).then(response => {
     this.props.setUsers(response.data.items)
    })
}
    
    render () {
        return <Users 
            totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage}
            users={this.props.users}
            deleteUser={this.props.deleteUser}
            addUser={this.props.addUser}
            onPageChanged={this.onPageChanged}
            />     
    }
}