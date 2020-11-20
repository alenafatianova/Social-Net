import React from 'react'
import {connect} from 'react-redux'
import {addUserAC, deleteUserAC, 
        setUsersAC, UsersActionType, 
        setCurrentPageAC, setTotalUsersCountAC } from '../../redux/UsersReducer'
import { StateType } from '../../redux/reduxStore'
import {UsersType} from '../../redux/UsersReducer'
import axios from 'axios'
import {Users} from './Users'

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


let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: (actions: UsersActionType) => void) => {
    return {
        addUser: (id: number) => {
            dispatch(addUserAC(id))
        },
        deleteUser: (id: number) => {
            dispatch(deleteUserAC(id))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
         setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
         }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersContainerComponent)
