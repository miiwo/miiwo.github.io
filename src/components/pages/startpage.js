import Clock from '../clock.js'
import Bookmark from '../bookmarks.js'
import SearchBar from '../searchbar.js'
import Waves from '../waves.js'
import * as info from '../information.json'
import React from 'react'
import './startpage.css'

function StartPage(props) {
    return (
	    <div className="startpage">
		<Clock />
		<div style={{display: "table", margin: "0 auto", tableLayout: "fixed"}}>
		    <Bookmark header="Dev" items={info.bookmark_one} />
		    <Bookmark header="Fun" items={info.bookmark_two} />
		    <Bookmark header="Reddit" items={info.bookmark_three} />
		</div>
		<SearchBar />
		<Waves />
	    </div>
    );  
}

export default StartPage;
