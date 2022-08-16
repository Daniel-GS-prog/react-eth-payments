
import React from "react";
import salusLogo from '../images/salus.png';
import githubLogo from '../images/github.png';

import '../App.css';
import './Navbar.css';


const Navbar = () => {
    return(
        <div className="row header sticky-section">
            <ul class="main-nav">
				<li class="logo-position"> <a href="#home"><img class="logo" src={salusLogo} /></a></li>
				<li class="nav-element"><a href="#transactions">Transactions</a></li>
				<li class="nav-element"><a href="#users">Users</a></li>
				<li class="nav-element"><a href="#about">About</a></li>
				<li class="nav-element"><a href="https://github.com/Daniel-GS-prog/react-eth-payments" target="_blank"><img class="github" src={githubLogo}/></a></li>
			</ul>
        </div>
    );
}

export default Navbar;