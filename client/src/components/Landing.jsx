import React,{useContext}  from "react";

import './Landing.css';
import '../App.css';

import { TransactionContext} from '../context/TransactionContext';


const Landing = () => {

        // providing access to the ethereum variables from TransactionContext.jsx
        const {connectWallet, currentAccount, formData, setFormData, handleChange} = useContext(TransactionContext);
       
        const connectedButton = () => {
            document.querySelector('.on-off').style.color='green';
        }
        
    
    
    return(
        
        <div className="content">

            <div className="central-text p-landing-page">
				<p >A web3 social media platform<br /></p>
				<p className="p-landing-page-2" >Conect  transfer create</p>
				
                {/*if the account is connected the connect button won't be rendered */}
                {currentAccount && (
                    <p>
                        <button 
                            className="button-18" 
                            onClick={connectWallet} 
                            role="button">Connect your wallet
                            
                        </button>
                    </p>
                    
                    

                )}
			</div>
        </div>
    );
}

export default Landing;