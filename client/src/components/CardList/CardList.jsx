import React from 'react';
import Card from '../Card/Card.jsx';

import '../../App.css';
import './CardList.css';



const CardList = ({users}) => {

	
	return (
		<div className='position'>

		{
			users.map((user , i) => {
			return (
				<Card 
					key={users[i].id} 
					id={users[i].id} 
					name={users[i].name} 
					email={users[i].email}
				/>
				);
			})
		}
		</div>
		);
	}

export default CardList;