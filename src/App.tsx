import React from 'react';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import MyPage from './components/MyPage/MyPage';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import MyContent from './components/MyContent/MyContent';
import Photos from './components/Photos/Photos';
import Settings from './components/Settings/Settings'


function App(props: any) {
  return (
  <div className = {classes.Wrapper}>
  <Header/>
  <div className={classes.Sidebar}>
    <MyPage/>
    <Dialogs/>
    <Friends/>
    <Music/>
    <Photos/>
    <Settings/>
  </div>
  <div className={classes.mainContent}>
  <MyContent/>
  </div>
  </div>
  );
}








export default App;
