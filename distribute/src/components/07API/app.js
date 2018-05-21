import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [" sachin", " saurav"]
    };
    this.fun = this.fun.bind(this);
  }

  fun(params) {
    const players = this.state.players.slice();
    players.push(" Virat");
    this.setState({ players });
    console.log("I am clicked new");
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            const players = this.state.players.slice();
            players.push(" Dhoni");
            this.setState({ players });
            console.log("Hi..");
          }}
        >
          Change the State
        </button>
        <button onClick={this.fun}>Change the State New</button>
        <button onClick={() => this.forceUpdate()}>Force Update</button>
        <button
          onClick={() => {
            ReactDOM.findDOMNode(document.getElementById("ply")).style.color =
              "red";
          }}
        >
          Force Update
        </button>
        <h1 id="ply"> Players: {this.state.players} </h1>
      </div>
    );
  }
}

export default App;
