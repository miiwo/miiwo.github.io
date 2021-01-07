import React from 'react'
import homepic from '../cutepenguins.jpg';

function Home(props) {
    return (
	<div style={{position: 'absolute', top: '20%', left: '50%' }}>
	    <img style={{ width:'300px' }}src={homepic} />
	    <p>Please click the buttons on the left to navigate my page!~</p>
	</div>
    )
}
export default Home
