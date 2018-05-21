import React, { Component } from "react";
import ReactDOM from "react-dom";

class Grapes extends Component {
  constructor() {
    super();
    this.state = {
      info: [
        { code: 101, name: "Black Grapes", price: 200 },
        { code: 102, name: "Black Grapes", price: 300 },
        { code: 103, name: "Black Grapes", price: 400 },
        { code: 104, name: "Black Grapes", price: 500 },
        { code: 105, name: "Black Grapes", price: 600 }
      ]
    };
  }

  render() {
    return (
      <div>
        <table>
          <Header />
          <BodyInfoNew myData={this.state.info} />
        </table>
      </div>
    );
  }
}

class Mango extends Component {
  constructor() {
    super();
    this.state = {
      info: [
        { code: 111, name: "A Mango", price: 200 },
        { code: 222, name: "Black Grapes", price: 300 },
        { code: 333, name: "Black Grapes", price: 400 },
        { code: 444, name: "Black Grapes", price: 500 },
        { code: 555, name: "Black Grapes", price: 600 }
      ]
    };
  }

  render() {
    return (
      <div>
        <table>
          <Header />
          <BodyInfoNew myData={this.state.info} />
        </table>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <thead className="table table-striped">
        <tr>
          <th> Code </th>
          <th> Name </th>
          <th> Price </th>
        </tr>
      </thead>
    );
  }
}

class BodyInfoNew extends Component {
  render() {
    return (
      <tbody>
        {this.props.myData.map(grp => <Record key={grp.code} data={grp} />)}
      </tbody>
    );
  }
}

class Record extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.code}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.price}</td>
      </tr>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1> Please choose a fruit </h1>
        <ul>
          <li>
            <Link to={"/"}> Mango </Link>{" "}
          </li>
          <li>
            <Link to={"/grapes"}> Mango </Link>{" "}
          </li>
        </ul>
        <Switch>
          <Route exact="/" component={Mango} />
          <Route exact="/grapes" component={Grapes} />
        </Switch>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector(".container"));
