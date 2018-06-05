import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends Component {
  constructor(props) {
    // Call super class
    super(props);

    // Bind this to function updateData (This eliminates the error)
    this.updateData = this.updateData.bind(this);
    this.state = { data: []};
  }

  componentWillMount() {

    // Your parse code, but not seperated in a function
    var csvFilePath = require("./documentlist.csv");
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData
    });
  }
  updateData(result) {
    const data = result.data;
    this.setState({data: data});
    console.log(data)
  }
  render() {
    if(this.state.data) {
    return (
      <div className="App">
        <List data={this.state.data} />
      </div>
    );
  } else {
    return ( <div> Loading </div>)
  }
  }
}

export default App;
