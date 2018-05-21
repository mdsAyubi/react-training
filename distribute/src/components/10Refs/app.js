import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "my data"
    };
    this.fun = this.fun.bind(this);
    this.allClear = this.allClear.bind(this);
  }

  fun(e) {
    this.setState({ data: e.target.value });
  }

  allClear() {
    this.setState({ data: "" });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (
      <div>
        <input
          ref="myInput"
          type="text"
          onChange={this.fun}
          value={this.state.data}
        />
        <h1> {this.state.data} </h1>
        <button onClick={this.allClear}> Clear </button>
      </div>
    );
  }
}

export default App;
