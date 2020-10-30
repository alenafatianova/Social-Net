import * as ServiceWorker from './serviceWorker'
import './index.css';
import React from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  store, {RootStateType}  from "./redux/store";



export const rerenderEntireTree = (state: RootStateType) => {
  
  ReactDOM.render(
    <React.StrictMode>
      <App 
        appState={store.getState()} 
        dispatch={store.dispatch.bind(store)} /> {/* мы убрали addPost и updateText, заменив это все методом dispatch*/}
    </React.StrictMode>,
    document.getElementById("root")
  );
};


rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

ServiceWorker.unregister();
