import { UsersReducer } from './users-reducer';
import { combineReducers, createStore } from 'redux'
import {ProfileReducer} from './profile-reducer'
import {DialogsReducer} from './dialogs-reducer'
import {NavbarReducer} from './navbar-reducer'
import { authReducer } from './auth-reducer'

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    navbar: NavbarReducer,
    usersPage:  UsersReducer,
    auth: authReducer,
})

export type StateType = ReturnType<typeof reducers>

let store = createStore(reducers);

export default store;
