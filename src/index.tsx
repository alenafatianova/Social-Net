import * as ServiceWorker from './serviceWorker'
import './index.css';
import React from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  store, {RootStateType}  from "./redux/store";
import {Provider}  from 'react-redux';

const StoreContext = React.createContext(store)
export const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      <App /> 
      </StoreContext.Provider>
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
