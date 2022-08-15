import React from 'react';
import './SearchBox.css';

const SearchBox  = ({SearchChange}) => {
	return (

		<div className=" pa2">
		<input 
		className="pa3 ma3 ba b--green bg-lightest-blue"
		type="search" 
		placeholder="Search users" 
		onChange= {SearchChange}
		/>
		
		</div>
		);
}

export default SearchBox;