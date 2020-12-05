import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss' 

type headerPropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    data: dataType
}
type dataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export default function Header(props: headerPropsType) {
    return (
        <div className={classes.header}>
           <div className={classes.links}>
           <div className={classes.login}>
               {props.isAuth ? props.login : 
                <NavLink to={'/login'} activeClassName={classes.active}>Login</NavLink>}
            </div>
            <div className={classes.registrate}>
            <NavLink to={'/registration'} activeClassName={classes.active}>Registrate</NavLink>
            </div>
           </div>
        </div>
    )
}
