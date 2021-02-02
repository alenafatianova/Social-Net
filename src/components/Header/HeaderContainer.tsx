import React from 'react'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import {  logout } from '../../redux/auth-reducer'
import {mapStateToPropsType, mapDispatchToPropsType, Header} from './Header'
import { compose } from 'redux'


export class HeaderContainer extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {
    render() {
        return (
            <Header {...this.props} 
            />
        )
    } 
}

const mapStateToProps = (state: StateType) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
} as mapStateToPropsType)


export default compose(
    connect(
    mapStateToProps, 
    {logout}))(HeaderContainer)

