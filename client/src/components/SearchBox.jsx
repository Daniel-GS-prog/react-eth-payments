import React from 'react';
import './SearchBox.css';

const SearchBox  = ({SearchChange}) => {
	return (

		<div className=" SearchBox">
		<input 
		className="pa3 ba b--green bg-lightest-blue"
		type="search" 
		placeholder="Search users" 
		onChange= {SearchChange}
		/>
		
		</div>
		);
}

export default SearchBox;