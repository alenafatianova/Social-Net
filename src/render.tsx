import React from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateText, RootStateType } from "./redux/state";

export let rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} updateText={updateText} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};




