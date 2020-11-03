import React from 'react';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import Photos from './components/Photos/Photos'
import Settings from './components/Settings/Settings';
import {RootStateType, ActionsType}  from './redux/store'
import DialogsContainer from './components/Dialogs/DialogsContainer';

export type AppStateType = {
  appState: RootStateType
  dispatch: (action: ActionsType) => void 
}

const App: React.FC<AppStateType> = (props) => {
  return (
    <BrowserRouter>
    <div>
      <div className = {classes.Wrapper}>
      <Header/>
      <Navbar/>
      <Route exact path='/dialogs' render={() => <DialogsContainer /> }/>
      <Route exact path='/profile' render={() => <Profile profilePage={props.appState.profilePage} dispatch={props.dispatch} /> }/>
      <Route exact path='/friends' render={() => <Friends/>}/>
      <Route exact path='/music' render={() => <Music/>}/>
      <Route exact path='/photos' render={() => <Photos/>}/>
      <Route exact path='/settings' render={() => <Settings/>}/>
  </div>
  </div>
  </BrowserRouter>
  );
}



export default App;
