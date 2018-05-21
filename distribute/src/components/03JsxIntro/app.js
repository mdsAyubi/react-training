import React, { Component } from "react";

class App extends Component {
  render() {
    var g = 10;
    var arcStyle = {
      color: "red",
      fontSize: 35
    };
    return (
      <div>
        <div>Hello React Stateful Component</div>
        <div>Elections</div>
        <p data-abc="abc" style={arcStyle}>
          least score gets the best....
        </p>
        <p>{1 + 2 + 3}</p>
        <p>{g == 10 ? "Apple" : "Orange"}</p>
        {/* hsfkjshgkh */}
      </div>
    );
  }
}

export default App;
