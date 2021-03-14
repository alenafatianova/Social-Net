import React, { ComponentType, Suspense } from 'react';
import classes from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { Friends } from './components/Friends/Friends';
import { Music } from './components/Music/Music';
import { Photos } from './components/Photos/Photos'
import { Settings } from './components/Settings/Settings';
import UsersContainer  from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login'
import {initilizedAppThunk} from '../src/redux/app-reducer'
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { Preloader } from './components/common/Preloader/Preloader';
import { useEffect } from 'react';
import store from './redux/redux-store';
import { WithSuspense } from './hoc/WithSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
 
export type appProps = {
  initialized: boolean
  initilizedAppThunk: () => void
}

export const App = (props: appProps) => {
  
  useEffect(() => {
    props.initilizedAppThunk()
      return () => {
    }
  }, [props])
    
    if (props.initialized) {
      return <Preloader/>
    }
    
    return (
        <div>
          <div className={classes.Wrapper}>
            <HeaderContainer  />
            <Navbar />
            <Route exact path="/dialogs" render={() => { 
              return  <Suspense fallback={<div>Loading...</div>}>
                  <DialogsContainer />
              </Suspense>
            }}/>
            <Route exact path="/profile/:userId?" render={WithSuspense(ProfileContainer)} />
            <Route exact path="/friends" render={() => <Friends />} />
            <Route exact path="/users" render={() => <UsersContainer />} />
            <Route exact path="/music" render={() => <Music />} />
            <Route exact path="/photos" render={() => <Photos />} />
            <Route exact path="/settings" render={() => <Settings />} />
            <Route exact path="/login" render={() => <LoginPage />} />
          </div>
        </div>
    );
  }



export const AppContainer = compose<ComponentType>(connect(null, {initilizedAppThunk}), withRouter)(App);

export const SamuraiJSApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <AppContainer /> 
      </Provider>
      </BrowserRouter>
  )
}