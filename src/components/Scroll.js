import React from 'react';
//This file creates a scrollable border around content so search bar stays in place
const Scroll = (props) => {

	return (
		<div style={{ overflowy: 'scroll', border: '5px solid black', height: '800px' }}>
			{props.children}
		</div>
	);
};

export default Scroll;