import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "my data"
    };
    this.changeFun = this.changeFun.bind(this);
  }

  changeFun(e) {
    this.setState({ data: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            this.setState({ data: e.target.value });
          }}
          value={this.state.data}
        />

        <input type="text" onChange={this.changeFun} value={this.state.data} />

        <h1> {this.state.data} </h1>
      </div>
    );
  }
}

export default App;
