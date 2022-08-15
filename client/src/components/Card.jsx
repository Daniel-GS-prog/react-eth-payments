import React from 'react';
import './Card.css';
// keep in mind the tags are not html but jsx
// so we need to import React.

const Card = ({name, email, id}) => {

	// const { name, email, id} = props;
//we can pass the parameters inside the props 
// in the card function declaration or as show above
// props name, email and id, are defined in the index.js file
// for the card tag.

	return (

		<div className='w5 h5 dib bg-lightest-blue black br3 pa3 ma2 grow bw2 shadow-5 tc '>
			<img src={`https://robohash.org/${id}?size=50x50`} alt='User' />
			<div>
				<h2>{name}</h2>

				<p>{email}</p>

				<p>Eth address</p>
			</div>
		</div>
		);
}

export default Card;