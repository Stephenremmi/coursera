import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { render } from 'react-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
//render takes in 2 arguments.1st component that we want to render.2nd argument tells React which argument it should render
render(<AboutPage/>, document.getElementById("root"));