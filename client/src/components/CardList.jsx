import React from 'react';
import Card from './Card';

import '../App.css';
import './CardList.css';

// we could also import the robots element from './robots'
// in that case we wouldn't have to pass it as a prop


// robots here is a prop, even though it's a state in the app element
// and that's because the parent element passes its state as prop to
// thei children
const CardList = ({users}) => {

	// we can iterate through the robots array and create 
	// a card component  with each user/robot

	// all iterations need a key to make sure they are being
	// removed or added properly. It should be something that doesn't change
	// In this case we could use index (like in the video class) but even in that
	//class Andrei recommened to use the robot id, and that' why I changed it accordingly.

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