import React from 'react'
import './bookmarks.module.css'

function Bookmark(props) {
    const items = Object.entries(props.items);
    const bkmk = items.map(([key, value], i) => 
        <a key={i} className="bookmark-link" href={"http://"+value}><p>{key}</p></a>
    )

    return (
	<div className="bookmark-col">
	    <p className="bookmark-header">{props.header}</p>
	    {bkmk}
	</div>
    )
}

export default Bookmark
