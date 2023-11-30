import Clock from '../src/components/clock.js'
import Bookmark from '../src/components/bookmarks.js'
import SearchBar from '../src/components/searchbar.js'
import Waves from '../src/components/waves.js'
import info from '../src/information.json'
import React from 'react'


function StartPage(props) {
    return (
	    <div className="startpage">
			<Clock />
			<div className="startpageTable">
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
