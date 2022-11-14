import Clock from '../components/clock.js'
import Bookmark from '../components/bookmarks.js'
import SearchBar from '../components/searchbar.js'
import Waves from '../components/waves.js'
import info from '../information.json'
import React from 'react'
import '../stylesheets/startpage.css'

function StartPage(props) {
    return (
	    <div className="startpage">
			<Clock />
			<div className="startpage-table">
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
