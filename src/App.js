import React from 'react';
import logo from './logo.svg';
import profilepic from './profilepic.jpg'
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Projects from './components/projects';
import About from './components/about';
import StartPage from './components/startpage';
// Amidst the sun-dappled leaves, the dead
function App() {
    const userinfo = {
	name: 'Michelle Wong',
	position: 'Junior Developer',
	pic: profilepic
    };

    const sidebarComponents = {
	"ABOUT": About,
	"PROJECTS": Projects,
	"STARTPAGE": StartPage
    };
    
    return (
	<Router basename={process.env.PUBLIC_URL}>
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
		  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
		  crossorigin="anonymous" />
	    
	    <div className="App">
		<Sidebar logo={userinfo.pic} name={userinfo.name} position={userinfo.position} sideItems={sidebarComponents} />
		<div style={{marginLeft: '30%', height: "100vh"}}><PageRoute items={sidebarComponents} /></div>
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
