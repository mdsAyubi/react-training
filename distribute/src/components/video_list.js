import React, { Component } from "react";
import VideoListItem from "./video_list_item";

export default class VideoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="list-group col-md-4">
        {this.props.videos.map(vid => (
          <VideoListItem key={vid.etag} video={vid} />
        ))}
      </ul>
    );
  }
}
