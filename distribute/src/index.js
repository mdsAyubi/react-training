import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyBPn_BxA8wGgybyrpHJBWR0UA1BnevgEJg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null
    };
    this.videoSearch = this.videoSearch.bind(this);
    this.videoSearch("Dhoni");
  }

  videoSearch(term) {
    YTSearch(
      {
        key: API_KEY,
        term
      },
      videos => {
        console.log(videos);
        this.setState({ videos, currentVideo: videos[0] });
      }
    );
  }

  render() {
    const videoCall = _.debounce(this.videoSearch, 400);
    return (
      <div>
        <SearchBar onSearchChange={videoCall} />
        <VideoDetail video={this.state.currentVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={currentVideo => {
            this.setState({ currentVideo });
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
