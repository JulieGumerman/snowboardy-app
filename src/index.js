import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { createStore, applyMiddleware } from "react-redux";
import { reducer } from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { BrowserRouter as Router} from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

