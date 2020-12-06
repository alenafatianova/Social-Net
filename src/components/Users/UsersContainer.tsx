import React from 'react'
import {connect} from 'react-redux'
import {addUser, deleteUser, 
        setUsers, setCurrentPage, 
        setTotalUsersCount, setPreloader } from '../../redux/users-reducer'
import {StateType} from '../../redux/redux-store'
import {UsersType} from '../../redux/users-reducer'
import axios from 'axios'
import {Users} from './Users'
import {Preloader} from '../common/Preloader'

export class UsersContainerComponent extends React.Component<{
    addUser: (id: number) => void, 
    deleteUser: (id: number) => void,
    setUsers: (users: Array<UsersType>,) => void,
    users: Array<UsersType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalCount: number) => void
    setPreloader: (isFetching: boolean) => void
    isFetching: boolean
    }, {}> 
    
    {
    componentDidMount() {
        this.props.setPreloader(true)
        if (this.props.users.length ===  0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
                &count=${this.props.pageSize}`, {
                    withCredentials: true
                }).then(response => {
             this.props.setPreloader(false)
             this.props.setUsers(response.data.items)
             this.props.setTotalUsersCount(response.data.totalCount)
            })
        }
    }
     onPageChanged = (pageNumber: number) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.setPreloader(false)
            this.props.setUsers(response.data.items)
    })
}
    render () {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users 
            totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage}
            users={this.props.users}
            deleteUser={this.props.deleteUser}
            addUser={this.props.addUser}
            onPageChanged={this.onPageChanged}
            />   
        </>  
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps, 
        {addUser, deleteUser, setUsers, setCurrentPage, setTotalUsersCount, setPreloader})
        (UsersContainerComponent)
