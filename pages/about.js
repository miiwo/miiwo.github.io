import React from 'react'
import info from '../src/information.json'
import seashell from '../public/res/seashell__30959.png'


function About(props) {
    return (
	<div className="about">
		<img className='seashellPic' src={seashell} alt="seashell" />
	    <h1 className="display-4 aboutHeader">About</h1>
	    <p className="aboutPara">{info.about}</p>
	</div>	
    );
}

export default About;
