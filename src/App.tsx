import React, { ComponentType } from 'react';
import classes from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import {  HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Friends } from './components/Friends/Friends';
import { Music } from './components/Music/Music';
import { Photos } from './components/Photos/Photos'
import { Settings } from './components/Settings/Settings';
import UsersContainer  from './components/Users/UsersContainer'
import {LoginPage} from './components/Login/Login'
import {initilizedAppThunk} from '../src/redux/app-reducer'
import { connect, Provider, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { Preloader } from './components/common/Preloader/Preloader';
import { useEffect } from 'react';
import store from './redux/redux-store';
import { WithSuspense } from './hoc/WithSuspense';
import { Header } from './components/Header/Header';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
 
export type appProps = {
  initialized: boolean
  initilizedAppThunk: () => void
}

export const App = (props: appProps) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initilizedAppThunk())
  }, [dispatch])

    if (props.initialized) {
      return <Preloader/>
    }
    
    return (
        <div>
          <div className={classes.Wrapper}>
            <Header />
            <Switch>
            <Redirect exact from='/' to='profile' />
            <Route path="/dialogs" render={WithSuspense(DialogsContainer)} />
            <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)} />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/photos" render={() => <Photos />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <LoginPage />} />
            </Switch>
            <Navbar />
          </div>
        </div>
    );
  }



export const AppContainer = compose<ComponentType>(connect(null, {initilizedAppThunk}), withRouter)(App);

export const SamuraiJSApp = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
       <AppContainer /> 
      </Provider>
      </HashRouter>
  )
}