import React from "react";

import Loader from './Loader.jsx';
import '../App.css';
import './Transactions.css';

const Transactions = () => {

	const handleSubmit = () => {

	}

	const Input = ({ placeholder, name, type, value, handleChange}) => {
		< input
			placeholder={placeholder}
			type={type}
			step="0.0001"
			value={value}
			onChange={(e) => handleChange(e, name)}
			/>

	}

    return(
        <div className="vh-75">
            
            <div class="row content">
			<div class="central-text sendfunds-page">
				<p class="sendfunds-text">Send crypto to your contacts</p>



				<p className="f4">or to anyone...</p>
				<div class="panel">

					<form>
						<input placeholder="Address to" name="addressTo" type="text" handleChange={() => {}} /><br/>
						<input placeholder="Amount in ETH" name="amount" step="0.0001" type="number" handleChange={() => {}} /><br/>
						
						{false ? (
							<Loader/>
						): (
							<input type="button" onClick={handleSubmit}  class="button-18" value="Transfer funds"/>

						)}

						
					</form>
					
				</div>
				
				
				


			</div>
		</div>
            
        </div>
    );
}

export default Transactions;