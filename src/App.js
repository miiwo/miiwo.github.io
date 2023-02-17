import profilepic from '../public/res/profilepic.jpg';

import React from 'react';
import { Helmet } from "react-helmet";

import Topbar from '../src/components/topbar';
import Projects from '../pages/projects';
import About from '../pages/about';
import StartPage from '../pages/startpage';
import Home from '../pages/home';

function App() {
    const userinfo = {
	name: 'Michelle Wong',
	position: 'Software Developer',
	pic: profilepic
    };

    const navComponents = {
		"HOME": Home,
		"ABOUT": About,
		"PROJECTS": Projects,
		"STARTPAGE": StartPage
    };
    
    return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Michelle Wong</title>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
					integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
					crossorigin="anonymous" />
			</Helmet>
			
			<div className="App">
				<Topbar sideItems={navComponents} />
				<div className="main-content">
				</div>
			</div>
		</>
  );
}

export default App;
