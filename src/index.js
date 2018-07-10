import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router className="Router">
        <App />
    </Router>, document.getElementById('root') // render the app at the root of the DOM
);

// disable service worker to start
// registerServiceWorker();
