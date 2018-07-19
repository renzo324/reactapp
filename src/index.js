//api key
const API_KEY='AIzaSyB8hI4LFf5T-k5zuBlUw_nRJ0zF7OuXqwE';

//imports
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
// Create a new component. Component should produce HTML
class App extends Component {
	constructor(props){
		super(props);

		this.state={ 
			videos: [],
			selectedVideo: null
		 }
		 this.videoSearch('MonsterCat')
	}

	videoSearch(term){
			YTSearch({key: API_KEY, term: term}, (videos) => { 
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});
		}


	render(){

		const videoSearch = _.debounce((term) =>{this.videoSearch(term)}, 300);

		return (
			<div className="row">
				<SearchBar onSearchTermChange={ videoSearch } />
				<div className="row">
				<VideoDetail video = {this.state.selectedVideo}/>
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos}
				 />
				 </div>
			</div>
			)
	}
};
//Take this component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container-fluid'));