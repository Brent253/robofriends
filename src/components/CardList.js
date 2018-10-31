	import React from 'react';
	import Card from './Card';

	const CardList = ({ robots }) => {
		return (
		<div>
			{
				robots.map((user, i) => {
			//loop through cards in robots.js
			return (
				<Card 
				key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
				/>
			);
		})
			}
		</div>
	);
}

	export default CardList;