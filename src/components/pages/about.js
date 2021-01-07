import React from 'react'
import Header from '../helper'
import * as info from '../information.json'


function About(props) {
    return (
	<div style={{paddingLeft: '3%'}}>
	    <h1 className="display-4" style={{textAlign: 'left'}}>About</h1>
	    <p style={{paddingRight: '3em', textAlign: 'left'}}>{info.about}</p>
	</div>	
    );
}

export default About;
