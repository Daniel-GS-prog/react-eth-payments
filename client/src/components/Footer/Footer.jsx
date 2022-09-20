import React from "react";

import '../../App.css';
import './Footer.css';

import githubLogo from '../../images/github.png';
import linkedIn from '../../images/linkedIn.png';
import twitter from '../../images/twitter.png';

const Footer = () => {
    return(
        <div id="footer" className="Footer">
        
            <ul className="main-nav">
				<li>Developed by Daniel Gonzalez</li> 
				<li className="nav-element"><a href="https://www.linkedin.com/in/daniel-g-s/" target="_blank"><img className="github" src={linkedIn}/></a></li>
				<li className="nav-element"><a href="https://twitter.com/MrHeldenberg" target="_blank"><img className="github" src={twitter}/></a></li>
				<li className="nav-element"><a href="https://github.com/Daniel-GS-prog" target="_blank"><img className="github" src={githubLogo}/></a></li>
			</ul>
        </div>
    );
}

export default Footer;