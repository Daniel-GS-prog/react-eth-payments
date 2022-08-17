import React,{useContext}  from "react";

import './Landing.css';
import '../App.css';

import { TransactionContext} from '../context/TransactionContext';


const Landing = () => {

        const {value} = useContext(TransactionContext);
        console.log(value);
    const connectWallet = () => {

	};
    
    return(
        
        <div className="content">

            <div class="central-text p-landing-page">
				<p >A web3 social media platform<br /></p>
				<p class="p-landing-page-2" >Conect  transfer create</p>
				<p><button class="button-18" onClick={connectWallet} role="button">Connect your wallet</button></p>
			</div>
        </div>
    );
}

export default Landing;