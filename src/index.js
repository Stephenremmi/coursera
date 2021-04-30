import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

//render takes in 2 arguments.1st component that we want to render.2nd argument tells React which argument it should render
render(<App />, document.getElementById("root"));