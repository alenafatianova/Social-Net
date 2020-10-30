import * as ServiceWorker from './serviceWorker'
import './index.css';
import React from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  store, { RootStateType }  from "./redux/store";



export const rerenderEntireTree = () => {
  
  ReactDOM.render(
    <React.StrictMode>
      <App 
        appState={store.getState()} 
        dispatch={store.dispatch.bind(store)} /> {/* мы убрали addPost и updateText, заменив это все методом dispatch*/}
    </React.StrictMode>,
    document.getElementById("root")
  );
};


rerenderEntireTree();
store.subscribe(rerenderEntireTree);

ServiceWorker.unregister();
