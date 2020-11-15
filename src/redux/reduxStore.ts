import { UsersReducer } from './UsersReducer';
import { combineReducers, createStore } from 'redux'
import {ProfileReducer} from './ProfileReducer'
import {DialogsReducer} from './DialogsReducer'
import {NavbarReducer} from './NavbarReducer'

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    navbar: NavbarReducer,
    usersPage:  UsersReducer
})

let store = createStore(reducers);
export type StateType = ReturnType<typeof reducers>
export default store;

