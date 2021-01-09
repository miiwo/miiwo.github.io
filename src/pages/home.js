import React from 'react'
import homepic from '../res/cutepenguins.png';
import '../stylesheets/home.css'


function Home(props) {
    return (
	<div className="home">
	    <img className="penguin" src={homepic} alt="logo" />
	    <p>Please click the buttons on the left to navigate my page!~</p>
	</div>
    )
}
export default Home
