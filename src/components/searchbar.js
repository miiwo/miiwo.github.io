import React from 'react'
import styles from './searchbar.module.css'

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

class SearchBar extends React.Component {
    constructor(props) {
		super(props);
		this.state = {value: '', suggestions: [], showSuggestions: true};
		this.handleChange = this.handleChange.bind(this);
		
    }

    handleChange(event) {
		this.setState({ value: event.target.value });
		// Show no suggestions if empty
		if (event.target.value === '') {
	    	this.setState({ suggestions: [] });
	    	return;
		}
	
		fetch('https://duckduckgo.com/ac/?q=' + event.target.value)
	    	.then(res => res.ok ? res.json() : console.log('Something went wrong with trying to search from DuckDuckGo.'))
	    	.then(data => {
				console.log(data.map(d => d["phrase"]));
				this.setState({ suggestions: data.map(d => d["phrase"]) })
	    	})
	    	.catch(error => console.log(error));
	
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
