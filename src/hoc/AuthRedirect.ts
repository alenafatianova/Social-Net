import { Redirect } from "react-router-dom"
import React from 'react'

interface withAuthRedirectProps {
    isAuth: boolean
}

export const withAuthRedirect = <P extends object>(Component: React.ComponentType<P>) => {
    class RedirectComponent extends React.Component<P & withAuthRedirectProps> {
        render() {
            const { isAuth } = this.props;
            return isAuth === false ?  <Redirect to={'/login'}/> : <Component {...props as P} />
        }
    }
  return  RedirectComponent;
}

 