import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { followUser, unfollowUser, setCurrentPage, setFollowingInProgress, getUsers } from '../../redux/users-reducer'
import { StateType } from '../../redux/redux-store'
import { UsersType } from '../../redux/users-reducer'
import { Users } from './Users'
import { Preloader } from '../common/Preloader'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'


export class UsersContainer extends React.Component<{
    setCurrentPage: (currentPage: number) => void,
    setFollowingInProgress: (isFetching: boolean, id: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,  
    users: Array<UsersType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
    unfollowUser: (id: number) => void,
    followUser: (id: number) => void,
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
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            followingInProgress={this.props.followingInProgress}
            totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage}
            users={this.props.users}
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


export default compose<ComponentType>(connect(mapStateToProps, 
    {followUser, unfollowUser, setCurrentPage, setFollowingInProgress, getUsers}), 
    withAuthRedirect)(UsersContainer) 
       
