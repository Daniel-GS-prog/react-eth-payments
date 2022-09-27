
import React,{useContext}  from "react";
import salusLogo from '../../images/salus.png';
import githubLogo from '../../images/github.png';
import onoffbutton from '../../images/on-off-button.png';

import '../../App.css';
import './Navbar.css';
import '../Landing/Landing.css';

import { TransactionContext} from '../../context/TransactionContext';

const connect = () => {

}


const Navbar = ({onRouteChange, isSignedIn}) => {

	const {connectWallet, currentAccount, formData, setFormData, handleChange} = useContext(TransactionContext);

	if(!isSignedIn){
		return(
			<div className="row header">
				<ul className="main-nav">
					<li 
						className="logo-position"
						onClick={()=> onRouteChange('landing')}
						> 
						<img className="logo" src={salusLogo} />
						
					</li>
					<li 
						className="nav-element"
						onClick={()=> onRouteChange('register')}
						>
						Register
					</li>
					<li 
						className="nav-element"
						onClick={()=> onRouteChange('signin')}
						>
						Sign out
					</li>

				</ul>
			</div>
		);
	} else {
		
		return(
        <div className="row header">
            <ul className="main-nav">

				<li 
					className="logo-position"
					onClick={()=> onRouteChange('landing')}
					> 
					<img className="logo" src={salusLogo} />
				</li>

				<li 
					className="nav-element"
					onClick={()=> onRouteChange('transactions')}
					>Transactions
				</li>
				<li 
					className="nav-element"
					onClick={()=> onRouteChange('user')}
					>
					Users
				</li>
				<li 
					className="nav-element"
					onClick={()=> onRouteChange('about')}
					>About

					</li>
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
    
}

export default Navbar;