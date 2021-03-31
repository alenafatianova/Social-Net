import React from 'react';
import classes from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import {  HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Friends } from './components/Friends/Friends';
import { Music } from './components/Music/Music';
import { Photos } from './components/Photos/Photos'
import { Settings } from './components/Settings/Settings';
import {UsersPage}  from './components/Users/UsersContainer'
import {LoginPage} from './components/Login/Login'
import {initilizedAppThunk} from '../src/redux/app-reducer'
import { connect, Provider, useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';
import { Preloader } from './components/common/Preloader/Preloader';
import { useEffect } from 'react';
import store, { StateType } from './redux/redux-store';
import { WithSuspense } from './hoc/WithSuspense';
import { Header } from './components/Header/Header';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage')) 


export const App = () => {
  const initialized = useSelector((state: StateType) => state.app.initilized)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initilizedAppThunk())
  }, [dispatch])

    if (initialized) {
      return <Preloader/>
    }
    const SuspendedDialogs = WithSuspense(DialogsContainer)
    const SuspendedProfile = WithSuspense(ProfileContainer)
    const SuspendedChat = WithSuspense(ChatPage)

    return (
        <div>
          <div className={classes.Wrapper}>
            <Header />
            <Switch>
            <Redirect exact from='/' to='profile' />
            <Route path="/dialogs" render={() => <SuspendedDialogs/>} />
            <Route path="/profile/:userId?" render={() => <SuspendedProfile/>} />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/users" render={() => <UsersPage />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/photos" render={() => <Photos />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="/chat" render={() => <SuspendedChat />} />
            </Switch>
            <Navbar />
          </div>
        </div>
    );
  }



export const AppContainer = compose<React.ComponentType>(connect(null, {initilizedAppThunk}), withRouter)(App);

export const SamuraiJSApp = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
       <AppContainer /> 
      </Provider>
      </HashRouter>
  )
}