import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../../styles/Header.module.css' 


export type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
  
export type mapDispatchToPropsType = {
    logout: () => void
}


export const Header: React.FC<mapStateToPropsType & mapDispatchToPropsType> = React.memo((props) => {
    return (
        <div className={style.header}>
           <div className={style.links}>
           <div className={style.login}>
               {
                props.isAuth 
                ? <div>{props.login } <button onClick={props.logout}>Log Out</button></div>
                : <NavLink to={'/login'} activeClassName={style.active}>Login</NavLink>}
            </div>
            <div className={style.registrate}>
            <NavLink to={'/registration'} activeClassName={style.active}>Sign In</NavLink>
            </div>
           </div>
        </div>
    )
})
