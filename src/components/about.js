import React from 'react'
import Header from './helper'
import * as info from './information.json'


function About(props) {
    return (
	<>
	    <h1 className="display-4" style={{textAlign: 'left'}}>About</h1>
	    <p style={{paddingRight: '3em', textAlign: 'left'}}>{info.about}</p>
	</>	
    );
}

export default About;
