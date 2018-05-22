import React, { Component } from "react";

export default class VideoListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="list-group-item">
        <div className="media">
          <div className="media-left">
            <img
              src={this.props.video.snippet.thumbnails.default.url}
              className="media-object"
              style={{ width: 60 }}
            />
          </div>
          <div className="media-body">
            <h4 className="media-heading">{this.props.video.snippet.title}</h4>
          </div>
        </div>
      </li>
    );
  }
}
