import React from 'react';
import './index.css';
import { rerenderEntireTree } from './render';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";


rerenderEntireTree(state)




reportWebVitals();
