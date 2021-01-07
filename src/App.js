import React from 'react';
import profilepic from './profilepic.jpg';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Sidebar from './components/sidebar';
import Projects from './components/projects';
import About from './components/about';
import StartPage from './components/startpage';
import Home from './components/home';

function App() {
    const userinfo = {
	name: 'Michelle Wong',
	position: 'Software Developer',
	pic: profilepic
    };

    const sidebarComponents = {
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
		<Sidebar logo={userinfo.pic} title={userinfo.name} subtitle={userinfo.position} sideItems={sidebarComponents} />
		<Switch>
		    <div style={{float: 'right', marginLeft: '30%', height: "100vh"}}>
			<PageRoute items={sidebarComponents} />
			<Redirect exact from="/" to='/HOME' />
		    </div>
		</Switch>
	    </div>
	</Router>
      
  );
}

function PageRoute(props) {
        const items = props.items;
    const routeItems = Object.entries(items).map(([key, value], i) =>
	(value.prototype.isReactComponent) ? <Route key={i} path={"/" + key} component={value} /> : <Route key={i} path={"/" + key} render={value} />)
    return (<>{routeItems}</>);
}

export default App;
