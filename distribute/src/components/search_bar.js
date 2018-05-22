import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            this.setState({ term: e.target.value });
          }}
          value={this.state.term}
        />
        Value of term: {this.state.term}
      </div>
    );
  }
}
