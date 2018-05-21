import React, { Component } from "react";

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: this.props.title,
      info: this.props.data
    };
  }
  render() {
    return (
      <div>
        <h1> {this.props.head} </h1>
        <h3> {this.state.info} </h3>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: this.props.page,
      body: this.props.description
    };
  }
  render() {
    return (
      <div>
        <Heading title={this.state.heading} data={this.state.body} />
      </div>
    );
  }
}

App.defaultProps = {
  page: "As you like it",
  description: "Blah"
};

export default App;
