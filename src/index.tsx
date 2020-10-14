import * as ServiceWorker from './serviceWorker'
import './index.css';
import  state, { subscribe } from './redux/state'
import React from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateText, RootStateType } from "./redux/state";



export const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} updateText={updateText} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

subscribe(rerenderEntireTree);

ServiceWorker.unregister();
