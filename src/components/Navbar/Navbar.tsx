import React from 'react';
import classes from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className={classes.Navbar}>
            <div>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={classes.active}>Dialogs</NavLink>
            </div>
           <div>
               <NavLink  to='/friends' activeClassName={classes.active}>Friends</NavLink >
            </div>
            <div>
               <NavLink  to='/users' activeClassName={classes.active}>Users</NavLink >
            </div>
           <div>
               <NavLink  to='/music' activeClassName={classes.active}>Music</NavLink >
            </div>
           <div>
               <NavLink to='/photos' activeClassName={classes.active}>Photos</NavLink >
            </div>
           <div>
               <NavLink  to='/settings' activeClassName={classes.active}>Settings</NavLink >
            </div>
        </div>
    )
}
