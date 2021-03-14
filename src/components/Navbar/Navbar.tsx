import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = React.memo(() => {
    return (
        <div className={style.Navbar}>
            <div className={style.link}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to='/dialogs' activeClassName={style.active}>Dialogs</NavLink>
            </div>
           <div className={style.link}>
               <NavLink  to='/friends' activeClassName={style.active}>Friends</NavLink >
            </div>
            <div className={style.link}>
               <NavLink  to='/users' activeClassName={style.active}>Users</NavLink >
            </div>
           <div className={style.link}>
               <NavLink  to='/music' activeClassName={style.active}>Music</NavLink >
            </div>
           <div className={style.link}>
               <NavLink to='/photos' activeClassName={style.active}>Photos</NavLink >
            </div>
           <div className={style.link}>
               <NavLink  to='/settings' activeClassName={style.active}>Settings</NavLink >
            </div>
        </div>
    )
})
