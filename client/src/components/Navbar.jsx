
import React from "react";
import salusLogo from '../images/salus.png';
import githubLogo from '../images/github.png';

import '../App.css';
import './Navbar.css';


const Navbar = () => {
    return(
        <div className="row header">
            <ul class="main-nav">
				<li class="logo-position"> <a href="./index.html"><img class="logo" src={salusLogo} /></a></li>
				<li class="nav-element"><a href="#footer">About</a></li>
				<li class="nav-element"><a href="./sendfunds.html">Send funds</a></li>
				<li class="nav-element"><a href="">Market Place</a></li>
				<li class="nav-element contact"><a  href="./contact.html">Contact</a></li>
				<li class="nav-element"><img class="github" src={githubLogo} /></li>
			</ul>
        </div>
    );
}

export default Navbar;