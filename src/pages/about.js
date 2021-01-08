import React from 'react'
import * as info from '../information.json'
import '../stylesheets/about.css'


function About(props) {
    return (
	<div className="about">
	    <h1 className="display-4 aboutHeader">About</h1>
	    <p className="aboutPara">{info.about}</p>
	</div>	
    );
}

export default About;
