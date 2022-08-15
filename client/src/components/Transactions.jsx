import React from "react";

import '../App.css';
import './Transactions.css';

const Transactions = () => {
    return(
        <div className="vh-75">
            
            <div class="row content">
			<div class="central-text sendfunds-page">
				<p class="sendfunds-text">Send crypto to your contacts</p>



				<p className="f4">or to anyone...</p>
				<div class="panel">
					<form>
						
						<input type="text" id="address" name="address" value="Address to"/><br/>
						<input type="text" id="amount" name="amount" value="Amount (ETH)"/><br/>


						<input type="button" class="button-18" value="Transfer"/>

					</form>
					
				</div>
				
				
				


			</div>
		</div>
            
        </div>
    );
}

export default Transactions;