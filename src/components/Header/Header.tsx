import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/auth-reducer'
import { StateType } from '../../redux/redux-store'
import style from '../../styles/Header.module.css' 



export const Header = () => {
    const isAuth = useSelector((state: StateType) => state.auth.isAuth)
    const login = useSelector((state: StateType) => state.auth.login)
    const dispatch = useDispatch()
    
    const logoutHandler = () => {
    dispatch(logout())
    }
    
    return (
        <div className={style.header}>
           <div className={style.links}>
           <div className={style.login}>
               {
                isAuth 
                ? <div>{login } <button className={style.logoutButton} onClick={logoutHandler}>Log Out</button></div>
                : <NavLink to={'/login'} activeClassName={style.active}>Login</NavLink>}
            </div>
            <div className={style.signInLink}>
            <NavLink to={'/registration'} activeClassName={style.active}>Sign In</NavLink>
            </div>
           </div>
        </div>
    )
}
