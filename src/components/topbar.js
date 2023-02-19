import React from 'react'
import Link from 'next/link';
import styles from './topbar.module.css'
import useWindowDimensions from './windowDimensions';


function SidebarList(props) {
    const items = Object.keys(props.items);
    const { height, width } = useWindowDimensions()
    const mobileWidth = 365

    const sidebarItems = items.map((item, i) =>
      <>
        <li key={i}>
          <Link href={item === "HOME" ? "/" : "/" + item.toLowerCase()} className={[styles.sidebarLink, "col-3"].join(" ")}>{item}</Link>
        </li>
        { width < mobileWidth && <hr className={styles.navHR} /> }
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