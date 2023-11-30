import React from 'react'
import Link from 'next/link';
//import '../stylesheets/sidebar.css'



function SidebarList(props) {
    const items = Object.keys(props.items);
    const sidebarItems = items.map((item, i) =>
		<li key={i}><Link href={"/" + item} className="sidebar-link">{item}</Link></li>
    );

    return (
		<ul id="sidebar-list">{sidebarItems}</ul>
    );
}

function SidebarCard(props) {
    return (
		<div className="sidebar-card">
			<div id="squareimg">
				<img className="semicircle-pic" src={props.profile} alt="logo" />
			</div>
			<h1 id="sidebar-title">{props.title}</h1>
			<span id="sidebar-subtitle">{props.subtitle}</span>
		</div>	
    );
}

function SidebarFooter(props) {
    return (
		<div id="sidebar-footer">
			<p><small>Copyright © 2021-2022</small></p>
		</div>
    )
}

function Sidebar(props) {
    return (
		<aside id="sidebar">
			<SidebarCard profile={props.logo} title={props.title} subtitle={props.subtitle} />
			<SidebarList items={props.sideItems} />
			<SidebarFooter />
		</aside>
    )
}

export default Sidebar
