import React from 'react'
import './bookmarks.css'
//props.items: dict(key="DisplayName", value="website-link")

function Bookmark(props) {
    const items = Object.entries(props.items);
    const bkmk = items.map(([key, value], i) => <a key={i} className="bookmark-link" href={"http://"+value}><p>{key}</p></a>)
    return (
	<div style={{display: "table-cell", minWidth: "15vw"}}>
	    <p className="bookmark-header" style={{background: '#0099FF', margin: '3px'}}>{props.header}</p>
	    {bkmk}
	</div>
    )
}

export default Bookmark
