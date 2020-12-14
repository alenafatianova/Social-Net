import React from 'react';
import classes from './App.module.css';
import ProfileContainer from './components/Profile/ProfileContainer'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import Photos from './components/Photos/Photos'
import Settings from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer';
import {LoginPage} from './components/Login/Login'


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div>
      <div className = {classes.Wrapper}>
      <HeaderContainer/>
      <Navbar/>
      <Route exact path='/dialogs' render={() => <DialogsContainer/> }/>
      <Route exact path='/profile/:userId?' render={() => <ProfileContainer /> }/>
      <Route exact path='/friends' render={() => <Friends/> }/>
      <Route exact path='/users' render={() => <UsersContainer /> }/>
      <Route exact path='/music' render={() => <Music/>}/>
      <Route exact path='/photos' render={() => <Photos/>}/>
      <Route exact path='/settings' render={() => <Settings/>}/>
      <Route exact path='/loginPage' render={() => <LoginPage/>}/>
  </div>
  </div>
  </BrowserRouter>
  );
}



export default App;
