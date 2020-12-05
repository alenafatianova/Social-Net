import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss' 

export default function Header() {
    return (
        <div className={classes.header}>
           <div className={classes.links}>
           <div className={classes.login}>
                <NavLink to={'/login'} activeClassName={classes.active}>Login</NavLink>
            </div>
            <div className={classes.registrate}>
            <NavLink to={'/registration'} activeClassName={classes.active}>Registrate</NavLink>
            </div>
           </div>
        </div>
    )
}
