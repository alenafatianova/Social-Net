import { headerLinks } from '../../API/API'
import React from 'react'
import { connect } from 'react-redux'
import { StateType } from '../../redux/redux-store'
import { setAuthData } from '../../redux/auth-reducer'
import {mapStateToPropsType, mapDispatchToPropsType, Header} from './Header'


export class HeaderContainer extends React.Component<mapStateToPropsType&mapDispatchToPropsType> {
    componentDidMount() {
        headerLinks().then(data => { 
               if(data.resultCode === 0) {
                   let {id, email, login} = data.data;
                this.props.setAuthData(id, email, login, true)
               }
           }
        )
    }
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

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, StateType>(
    mapStateToProps, {setAuthData})(HeaderContainer)

