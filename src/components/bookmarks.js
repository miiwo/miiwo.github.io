import React from 'react'
import styles from './bookmarks.module.css'

function Bookmark(props) {
    const items = Object.entries(props.items);
    const bkmk = items.map(([key, value], i) => 
        <a key={"bkmk" + i} className={styles.bookmarkLink} href={"http://"+value}><p className={styles.bookmarkLink} >{key}</p></a>
    )

    return (
	<div className={styles.bookmarkCol}>
	    <p className={styles.bookmarkHeader}>{props.header}</p>
	    {bkmk}
	</div>
    )
}

export default Bookmark
