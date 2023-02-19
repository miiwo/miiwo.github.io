import React from 'react'
import Image from 'next/image'
import info from '../src/information.json'
import seashell from '../public/res/seashell__30959.png'


function About(props) {
    return (
	<div className="about">
		<Image src={seashell} alt={"seashell"} className="seashellPic" />
	    <h1 className="display-4 aboutHeader">About</h1>
	    <p className="aboutPara">{info.about}</p>
	</div>	
    );
}

export default About;
