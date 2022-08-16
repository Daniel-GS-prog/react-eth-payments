import React from 'react';
import './Card.css';

const address = '0xE7db30F0831Bae94e37209ddBD3d74fFAacBD1bc';

function copy() {
	/* Get the text field */
	var copyText = document.getElementById("myInput");
  
	// /* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
	 /* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText.value);
  
	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);
  } 

const Card = ({name, email, id}) => {


	return (

		<div className=' Card black '>
			<img src={`https://robohash.org/${id}`} alt='User' />
			<div>
				<h2>{name}</h2>

				<p>{email}</p>

				
					<p>Eth address:</p>
					<p>{address.substring(0,8)}...</p>
				

				
				
			</div>
		</div>
		);
}

export default Card;


{/* <img 
						className='icon'	
						src="http://clipground.com/images/copy-4.png" 
          				title="Click to Copy"
					/> */}