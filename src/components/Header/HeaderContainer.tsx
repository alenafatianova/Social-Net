import axios from 'axios'
import React from 'react'
import { connect } from 'tls'
import { StateType } from '../../redux/redux-store'
import Header from './Header'
import { setAuthDataAC } from '../../redux/auth-reducer'


export type HeaderContainerProps = {
    data: dataType
    setAuthDataAC: (id: number, email: string, login: string) => void
}

type dataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerProps> {
    componentDidMount() {
       axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(
           response => { 
               if(response.data.resultCode === 0) {
                   let {id, email, login} = response.data.data;
                this.props.setAuthDataAC(id, email, login)
               }
           }
           )
    }
    render() {
        return (
            <Header 
                id={this.props.data.id} 
                email={this.props.data.email}
                login={this.props.data.login}
                isAuth={this.props.data.isAuth}
                data={this.props.data}
            />
        )
    } 
}
let mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
}}

export default connect(mapStateToProps, {setAuthDataAC})(HeaderContainer)