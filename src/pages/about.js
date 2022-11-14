import React from 'react'
import info from '../information.json'
import '../stylesheets/about.css'
import seashell from '../res/seashell__30959.png'


function About(props) {
    return (
	<div className="about">
		<img className='seashellPic' src={seashell} />
	    <h1 className="display-4 aboutHeader">About</h1>
	    <p className="aboutPara">{info.about}</p>
	</div>	
    );
}

export default About;
