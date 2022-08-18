
import React,{useContext}  from "react";
import salusLogo from '../images/salus.png';
import githubLogo from '../images/github.png';
import onoffbutton from '../images/on-off-button.png';

import '../App.css';
import './Navbar.css';
import './Landing.css';

import { TransactionContext} from '../context/TransactionContext';

const connect = () => {

}


const Navbar = () => {

	const {connectWallet, currentAccount, formData, setFormData, handleChange} = useContext(TransactionContext);

    return(
        <div className="row header sticky-section">
            <ul className="main-nav">
				<li className="logo-position"> <a href="#home"><img className="logo" src={salusLogo} /></a></li>
				<li className="nav-element"><a href="#transactions">Transactions</a></li>
				<li className="nav-element"><a href="#users">Users</a></li>
				<li className="nav-element"><a href="#about">About</a></li>
				<li className="nav-element"><a href="https://github.com/Daniel-GS-prog/react-eth-payments" target="_blank"><img className="github" src={githubLogo}/></a></li>
				
				{currentAccount?
					<li className="nav-element">Connected: <br/>{currentAccount.substring(0,8)}...</li>
					:
					<li className="nav-element"><a href=""><img className="github on-off" src={onoffbutton}/></a></li>

				}		

				


				

 
				

			</ul>
        </div>
    );
}

export default Navbar;