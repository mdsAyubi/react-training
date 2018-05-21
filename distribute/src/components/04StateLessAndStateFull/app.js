import React, { Component } from "react";

const Apple = () => <div>I am from Apple </div>;

const Orange = () => {
  return <div> Orange... </div>;
};

class Pine extends Component {
  render() {
    return (
      <div>
        <h1> Pine from Lanka </h1>
      </div>
    );
  }
}

class Mango extends Component {
  constructor() {
    super();
    this.state = {
      name: "Super Awesome Mango Breed",
      cost: 100
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.cost}</p>
      </div>
    );
  }
}

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
          <BodyInfo myData={this.state.info} />
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

class BodyInfo extends Component {
  render() {
    return (
      <tbody>
        {this.props.myData.map((grp, index) => (
          <tr key={index}>
            <td>{grp.code}</td>
            <td>{grp.name}</td>
            <td>{grp.price}</td>
          </tr>
        ))}
      </tbody>
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
        <Apple />
        <Orange />
        <Pine />
        <Mango />
        <Grapes />
      </div>
    );
  }
}

export default App;
