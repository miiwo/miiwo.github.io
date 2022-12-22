import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheets/topbar.css'


function SidebarList(props) {
    const items = Object.keys(props.items);
    const sidebarItems = items.map((item, i) =>
		<li key={i}><NavLink to={"/" + item} className="sidebar-link col-3">{item}</NavLink></li>
    );

    return (
		  <ul id="sidebar-list">{sidebarItems}</ul>
    );
}


function Topbar(props) {
    return (
		<aside id="topbar">
			<SidebarList items={props.sideItems} />
		</aside>
    )
}

export default Topbar