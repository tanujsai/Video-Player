import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


//import

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY_Youtube = "AIzaSyBaTxqBlZSB-rduiqiDfAu8MoxHrusP4gM";

//Component should produce some html
//Put it into DOM

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Selena Gomez');

    }
    //Search Video using user Term
    videoSearch(term) {
        YTSearch({ key: API_KEY_Youtube, term: term }, (videos) => {
            
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            console.log("Vide:",this.state.videos);
            console.log("sss",this.state.selectedVideo);

            // Internal ES6 Syntax we property name is simillary to value this.setState({ videos:videos });

        });
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        return (<div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos} />

        </div>
        );

    }
}

ReactDOM.render(<App />, document.querySelector('.container'));