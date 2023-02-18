import React from 'react'
import Link from 'next/link';
import './topbar.module.css'
import useWindowDimensions from './windowDimensions';


function SidebarList(props) {
    const items = Object.keys(props.items);
    const { height, width } = useWindowDimensions()
    const mobileWidth = 365

    const sidebarItems = items.map((item, i) =>
    <>
    	<li key={item}>
        <Link href={item === "HOME" ? "/" : "/" + item.toLowerCase()} className="sidebar-link col-3">{item}</Link>
      </li>
      { width < mobileWidth && <hr className='navHR' /> }
    </>
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