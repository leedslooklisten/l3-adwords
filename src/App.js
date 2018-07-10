// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import LandingAPage from "./pages/LandingA";
import NavBar from "./components/NavBar";

const App = () => (

  <div className="App">
    <div>
      <NavBar/>
    </div>

    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li> */}
        <li>
          <Link to="/landingA">LandingA</Link>
        </li>
      </ul>
    </div>

    <div>
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/topics" component={Topics} /> */}
      <Route path="/landingA" component={LandingAPage} />
    </div>

  </div>
);

const Home = () => (
  <div className="App-header">
    <h2>Home</h2>
  </div>
);

export default App;