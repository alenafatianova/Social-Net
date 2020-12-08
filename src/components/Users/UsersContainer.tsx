import React from 'react'
import { connect } from 'react-redux'
import { addUser, deleteUser, 
        setUsers, setCurrentPage, 
        setTotalUsersCount, setPreloader, setFollowingInProgress, getUsersThunkcreator } from '../../redux/users-reducer'
import { StateType } from '../../redux/redux-store'
import { UsersType } from '../../redux/users-reducer'
import { Users } from './Users'
import { Preloader } from '../common/Preloader'
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
    setFollowingInProgress: (isFetching: boolean, id: number) => void
    followingInProgress: number[]
    }, {}> 
    
    {
    componentDidMount() {
        this.props.getUsersThunkcreator();
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
            followingInProgress={this.props.followingInProgress}
            setFollowingInProgress={this.props.setFollowingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, 
        {addUser, deleteUser, setUsers, 
        setCurrentPage, setTotalUsersCount, setPreloader, 
        setFollowingInProgress, getUsersThunkcreator})
        (UsersContainerComponent)
