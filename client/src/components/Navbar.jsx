
import React from "react";
import salusLogo from '../images/salus.png';
import githubLogo from '../images/github.png';
import onoffbutton from '../images/on-off-button.png';

import '../App.css';
import './Navbar.css';


const Navbar = () => {
    return(
        <div className="row header sticky-section">
            <ul className="main-nav">
				<li className="logo-position"> <a href="#home"><img className="logo" src={salusLogo} /></a></li>
				<li className="nav-element"><a href="#transactions">Transactions</a></li>
				<li className="nav-element"><a href="#users">Users</a></li>
				<li className="nav-element"><a href="#about">About</a></li>
				<li className="nav-element"><a href="https://github.com/Daniel-GS-prog/react-eth-payments" target="_blank"><img className="github" src={githubLogo}/></a></li>
				<li className="nav-element"><img className="github on-off" src={onoffbutton}/></li>
			</ul>
        </div>
    );
}

export default Navbar;