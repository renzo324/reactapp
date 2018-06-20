//api key
const API_KEY='AIzaSyB8hI4LFf5T-k5zuBlUw_nRJ0zF7OuXqwE';


//imports
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
// Create a new component. Component should produce HTML
const App = () => {
	return (
		<div>
		<SearchBar />
		</div>
		)
};
//Take this component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));