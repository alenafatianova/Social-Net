import React from 'react'
import {connect} from 'react-redux'
import {addUser, deleteUser, 
        setUsers, setCurrentPage, 
        setTotalUsersCount, setPreloader } from '../../redux/users-reducer'
import {StateType} from '../../redux/redux-store'
import {UsersType} from '../../redux/users-reducer'
import {Users} from './Users'
import {Preloader} from '../common/Preloader'
import { usersAPI } from '../../API/API'

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
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
             this.props.setPreloader(false)
             this.props.setUsers(data.items)
             this.props.setTotalUsersCount(data.totalCount)
            })
        }
    }
     onPageChanged = (pageNumber: number) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
            usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setPreloader(false)
            this.props.setUsers(data.items)
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
