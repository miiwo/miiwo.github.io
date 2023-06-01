import React from 'react'
import styles from './searchbar.module.css'
import Script from 'next/script'

const search_url = 'https://duckduckgo.com/?q=';

function SearchSuggestionBox(props) {
    const suggestionList = props.suggestions.length >= 3 ? props.suggestions.slice(0, 3).map((s, i) => 
																<li key={i} className={styles.searchSuggestions}>
																	<a href={search_url+s}>{s}</a>
																</li>) 
														: [];
    return (
		<ul id="search-suggestions">
			{suggestionList}
		</ul>
    )
}

function fetchDuckDuckGoSuggestions(query) {
	return new Promise((resolve) => {
		window.autocompleteCallback = (res) => {
			const suggs = []

			for (const item of res) {
				if (item.phrase === query.toLowerCase()) continue
				suggs.push(item.phrase)
			}

			resolve(suggs)
		}

		let script = document.createElement('script')
		document.querySelector('head').appendChild(script)
		script.src = `https://duckduckgo.com/ac/?callback=autocompleteCallback&q=${query}`
		script.onload = script.remove

	})
}

class SearchBar extends React.Component {
    constructor(props) {
		super(props);
		this.state = {value: '', suggestions: [], showSuggestions: true};
		this.handleChange = this.handleChange.bind(this);
		
    }

    async handleChange(event) {
		this.setState({ value: event.target.value });
		// Show no suggestions if empty
		if (event.target.value === '') {
	    	this.setState({ suggestions: [] });
	    	return;
		}

		const res = await fetchDuckDuckGoSuggestions(event.target.value)
		this.setState({ suggestions: res })
    }
    
    render() {
		return (
	    	<>
				<form autoComplete="off" spellCheck="false" action="https://www.duckduckgo.com/" method="get" target="_blank" id={styles.searchForm}>
					<input name="q" type="text" value={this.state.value} onChange={this.handleChange} id={styles.searchbar} placeholder="Type here to search for something." />
					<SearchSuggestionBox suggestions={this.state.suggestions} />
				</form>
	    	</>
		)
    }
}

export default SearchBar
