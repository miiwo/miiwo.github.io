import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.css'


function SidebarList(props) {
    const items = Object.keys(props.items);
    const sidebarItems = items.map((item, i) =>
	<li key={i}><NavLink to={"/" + item} className="sidebar-link">{item}</NavLink></li>
    );

    return (
	<ul className="sidebar-list">{sidebarItems}</ul>
    );
}

function SidebarCard(props) {
    return (
	<div className="sidebar-card">
	    <div id="squareimg"><img className="sidebar-pic" src={props.profile} alt="logo" /></div>
	    <h1>{props.name}</h1>
	    <span className="position">{props.position}</span>
	</div>	
    );
}

function SidebarFooter(props) {
    return (
	<div className="sidebar-footer">
	    <p>
		<small>
		    © Copyright © 2020
		</small>
	    </p>
	</div>
    )
}

function Sidebar(props) {
    return (
	<aside className="sidebar">
	    <SidebarCard profile={props.logo} name={props.name} position={props.position} />
	    <SidebarList items={props.sideItems} />
	    <SidebarFooter />
	</aside>
    )
}

export default Sidebar
