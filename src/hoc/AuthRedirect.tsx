//import { mapDispatchToPropsType } from '../components/Header/Header';
import { StateType } from '../redux/redux-store';
import { Redirect } from "react-router-dom"
import React from 'react'
import { connect } from "react-redux";

let mapStateToPropsRedirect = (state: StateType) => ({
    isAuth: state.auth.isAuth
})

type mapDispatchToProps = {

}

type withAuthRedirectProps = {
    isAuth: boolean 
}

export function withAuthRedirect (WrappedComponent: React.ComponentType) {
    
    const RedirectComponent: React.FC <withAuthRedirectProps & mapDispatchToProps> = (props) => {
        
        let {isAuth, ...restProps} = props;
        
        if (!isAuth ) return  <Redirect to='/login' /> 
        return  <WrappedComponent {...restProps} /> 
    }

    let ConnectedAuthRedirectComponent = connect<withAuthRedirectProps, {}, mapDispatchToProps, StateType>
        (mapStateToPropsRedirect)
        (RedirectComponent)

    return  ConnectedAuthRedirectComponent;
}

 