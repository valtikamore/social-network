import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, changeNewText, stateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} changeNewText={changeNewText}/>
            </BrowserRouter>
        </React.StrictMode>,document.getElementById('root')
);
}





