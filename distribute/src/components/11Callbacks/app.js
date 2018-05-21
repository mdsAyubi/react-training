import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.setState({ data: e.target.value })}
        />
        <button onClick={() => this.props.pFun(this.state.data)}>
          Send Info
        </button>
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
    this.parentFun = this.parentFun.bind(this);
  }

  parentFun(value) {
    this.setState({ data: value });
  }

  render() {
    return (
      <div>
        <Child pFun={this.parentFun} />

        <h1> {this.state.data} </h1>
      </div>
    );
  }
}

export default App;
