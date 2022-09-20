import React,{useContext}  from "react";

import Loader from '../Loader/Loader.jsx';
import '../../App.css';
import './Transactions.css';
import { TransactionContext} from '../../context/TransactionContext';


const Input = ({placeholder, name, type, value, handleChange }) => (
	<input 
		placeholder={placeholder}
		type={type}
		step="0.0001"
		value={value}
		onChange={(e) => handleChange(e, name)}
		/>

);

const Transactions = () => {

		// access to the variables and functions in the TransactionContext
	const {connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading} = useContext(TransactionContext);

	const handleSubmit = (e) => {
		const {addressTo, amount} = formData;
		
		e.preventDefault();

		if(!addressTo ||  !amount) return;

		sendTransaction();

	}

    return(
        <div className="vh-75">
            
            <div className="row content">
			<div className="central-text sendfunds-page">
				<p className="sendfunds-text">Send crypto to your contacts</p>



				<p className="f4">or to anyone...</p>
				<div className="panel">

					<form>
						<Input placeholder="Address to" name="addressTo" type="text" handleChange={handleChange} /><br/>
						<Input placeholder="Amount in ETH" name="amount" type="number" handleChange={handleChange} /><br/>
						
						{/* showing the transaction loading process to the user*/}
						{isLoading ? 
							<Loader/>
						: (
							<button 
								type="button" 
								onClick={handleSubmit}  
								className="button-18" 
								
							>
								Transfer funds
							</button>

						)}

					</form>
					
				</div>
	
			</div>
		</div>
            
        </div>
    );
}

export default Transactions;