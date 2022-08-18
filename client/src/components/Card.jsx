import React from 'react';
import './Card.css';



const Card = ({name, email, id}) => {

	const address = '0xE7db30F0831Bae94e37209ddBD3d74fFAacBD1bc';




	return (
		

		<div className=' Card black '>
			<img src={`https://robohash.org/${id}`} alt='User' />
			<div>
				<h2>{name}</h2>

				<p>{email}</p>

				<div className='display-flex'>
					<p>Eth address: {address.substring(0,8)}...</p>
					
				</div>

				
				
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