import  {Users} from './UsersClassComponent'
import {connect} from 'react-redux'
import {addUserAC, deleteUserAC, setUsersAC, UsersActionType} from '../../redux/UsersReducer'
import { StateType } from '../../redux/reduxStore'
import {UsersType} from '../../redux/UsersReducer'

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount
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
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
