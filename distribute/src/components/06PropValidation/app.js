import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return <div>Here we are</div>;
  }
}

App.propTypes = {
  title: PropTypes.string,
  accept: PropTypes.bool.isRequired,
  days: PropsTypes.number
};

export default App;
