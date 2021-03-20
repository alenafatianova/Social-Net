import { appReducer } from './app-reducer';
import { UsersReducer } from './users-reducer';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import {ProfileReducer} from './profile-reducer'
import {DialogsReducer} from './dialogs-reducer'
import {NavbarReducer} from './navbar-reducer'
import { authReducer } from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'



const reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    navbar: NavbarReducer,
    usersPage:  UsersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

export type StateType = ReturnType<typeof reducers>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

//@ts-ignore
window.__store__ = store;

export default store;
