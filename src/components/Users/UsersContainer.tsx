import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import {requestUsers, follow, unfollowUser, FilterType } from '../../redux/users-reducer'
import { StateType } from '../../redux/redux-store'
import { Users } from './Users'
import { Preloader } from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'
import { getAllUsersSelector, getCurrentPage, getFetching, 
        getFollowingProgress, getPageSize, getTotalUsersCount, getUsersFilter } from '../../redux/users-selectors'
import { UserType } from '../../types/types'


type MapStateToPropsType = {
    users: Array<UserType>,
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
    filter: FilterType
}
type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void,
    setFollowingInProgress: (isFetching: boolean, id: number) => void,
    requestUsers: (currentPage: number, pageSize: number, term: string) => void,  
    unfollowUser: (id: number) => void,
    followUser: (id: number) => void,
    setTerm: (term: string) => void
}
export type usersConatinerPropsType = MapDispatchToPropsType & MapStateToPropsType

export class UsersContainer extends React.Component<usersConatinerPropsType> 
   
    {componentDidMount() {
        if (this.props.users.length ===  0) {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize, '')}
    }
    // onPageChanged = (pageNumber: number) => {
    //     this.props.setCurrentPage(pageNumber)
    //     this.props.requestUsers(pageNumber, this.props.pageSize, this.props.filter.term)
    // }
    onFilterChanged = (filter: FilterType) => {
        const {currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize, filter.term)
    }

    render () {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users  />   
        </>  
    }
}

const  mapStateToProps = (state: StateType): MapStateToPropsType  => {
    return {
        users: getAllUsersSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowingProgress(state),
        filter: getUsersFilter(state)
    }
}


export default compose<ComponentType>(connect(mapStateToProps, 
    {follow, unfollowUser, requestUsers}), 
    withAuthRedirect)(UsersContainer) 
       
