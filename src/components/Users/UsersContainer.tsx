import React from 'react'
import { connect } from 'react-redux'
import { addUser, deleteUser, 
        setCurrentPage,
        setFollowingInProgress, getUsers } from '../../redux/users-reducer'
import { StateType } from '../../redux/redux-store'
import { UsersType } from '../../redux/users-reducer'
import { Users } from './Users'
import { Preloader } from '../common/Preloader'


export class UsersContainerComponent extends React.Component<{
    addUser: (id: number) => void, 
    deleteUser: (id: number) => void,
    setCurrentPage: (currentPage: number) => void,
    setFollowingInProgress: (isFetching: boolean, id: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,  
    users: Array<UsersType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
    }, {}> 
    
    {
    componentDidMount() {
        if (this.props.users.length ===  0) {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    }
     onPageChanged = (pageNumber: number) => {
         this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
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
        {addUser, deleteUser, setCurrentPage, 
        setFollowingInProgress, getUsers})
        (UsersContainerComponent)
