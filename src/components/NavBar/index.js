import React from "react";
import logo from '../../images/logo.svg';

const NavBar = () => {
    return(
        <div className="App-header">
            <img src={logo} className="logo" alt="leeds-logo"/>
            <p> leeds look listen </p>
        </div>
    );
}

export default NavBar;