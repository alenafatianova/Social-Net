import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss' 


export type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
    setAuthDataAC: (id: number, email: string, login: string) => void
}  
export type mapDispatchToPropsType = {
    setAuthDataAC: (id: number, email: string, login: string) => void
}


export function Header(props: mapStateToPropsType&mapDispatchToPropsType) {
    return (
        <div className={classes.header}>
           <div className={classes.links}>
           <div className={classes.login}>
               {
               props.isAuth ? props.login : 
                <NavLink to={'/login'} activeClassName={classes.active}>Login</NavLink>}
            </div>
            <div className={classes.registrate}>
            <NavLink to={'/registration'} activeClassName={classes.active}>Registrate</NavLink>
            </div>
           </div>
        </div>
    )
}
