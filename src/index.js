import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
// import Controller from './screens/Controller';
import Home from "./screens/home/Home";
import RegisterUser from "./common/RegisterUser";


ReactDOM.render(<Home/>, document.getElementById('root'));
// ReactDOM.render(<RegisterUser/>, document.getElementById('root'));
registerServiceWorker();
