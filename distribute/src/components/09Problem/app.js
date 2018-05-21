import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.props.onChangeChild}
          value={this.props.parentState.data}
        />
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "my data"
    };
    this.onChangeParent = this.onChangeParent.bind(this);
  }

  onChangeParent(e) {
    this.setState({ data: e.target.value });
  }

  render() {
    return (
      <div>
        <Child onChangeChild={this.onChangeParent} parentState={this.state} />

        <h1> {this.state.data} </h1>
      </div>
    );
  }
}

export default App;
