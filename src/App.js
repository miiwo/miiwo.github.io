import profilepic from './res/profilepic.jpg';
import './App.css';

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from "react-helmet";

// import Sidebar from './components/sidebar';
import Topbar from './components/topbar';
import Projects from './pages/projects';
import About from './pages/about';
import StartPage from './pages/startpage';
import Home from './pages/home';

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
	<Router basename={process.env.PUBLIC_URL}>
	    <Helmet>
            <meta charSet="utf-8" />
            <title>Michelle Wong</title>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
				integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
				crossorigin="anonymous" />
        </Helmet>
	    
	    <div className="App">
			<Topbar sideItems={navComponents} />
			{/*<Sidebar logo={userinfo.pic} title={userinfo.name} subtitle={userinfo.position} sideItems={navComponents} /> */}
			<div className="main-content">
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/startpage" element={<StartPage />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
	    </div>
	</Router>
      
  );
}

export default App;