import React from 'react';
import './SearchBox.css';

const SearchBox  = ({SearchChange}) => {
	return (

		<div className="SearchBox">
		<input 
		type="search" 
		placeholder="Search users" 
		onChange= {SearchChange}
		/>
		
		</div>
		);
}

export default SearchBox;