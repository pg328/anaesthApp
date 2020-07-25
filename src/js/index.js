import React from "react";
import ReactDOM from "react-dom";
import '../img/favicons/favicon.ico'
import "../css/main.scss";
import './bootstrap_import'
import App from './App'
import { hot } from "react-hot-loader/root";


const render = (Component) =>
    ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));
