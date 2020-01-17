import React from 'react';

const Scroll = (props) => {
	return (

		<div style={{
			overflowY: 'scroll',
			border: '1 px solid #000',
			hight: '500px'
		}}>
			{props.children}
		</div>

	);
};

export default Scroll;