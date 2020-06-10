import React from 'react'

function Header(props) {
    return (
	<div>
	    <span>{props.subtitle}</span>
	    <h2>{props.title}</h2>
	</div>	
    );
}


export default Header
