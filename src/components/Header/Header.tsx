import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css' 


export type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
  
export type mapDispatchToPropsType = {
    logout: () => void
}


export const Header: React.FC<mapStateToPropsType & mapDispatchToPropsType> = React.memo((props) => {
    return (
        <div className={classes.header}>
           <div className={classes.links}>
           <div className={classes.login}>
               {
                props.isAuth 
                ? <div>{props.login } <button onClick={props.logout}>Log Out</button></div>
                : <NavLink to={'/login'} activeClassName={classes.active}>Login</NavLink>}
            </div>
            <div className={classes.registrate}>
            <NavLink to={'/registration'} activeClassName={classes.active}>Sign In</NavLink>
            </div>
           </div>
        </div>
    )
})
