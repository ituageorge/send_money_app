import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from 'react-redux'
// import store from './store/store'

import Home from "./js/components/Home";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
    // <Provider store={store}>
        <Home/>
    // </Provider>
, wrapper) : false;