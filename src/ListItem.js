import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ListItemCollapse from './listItemCollapse.js';


  class ListItem extends Component {
    componentDidMount() {
      var emailPath = require("./TEXT/"+ this.props.email['Control Number'] + ".txt");
    }
  render() {
    return (
      <div>
        {this.props.email['Control Number']}
        <ul>
        <li>
        Email from: {this.props.email['Email From']}
        </li>
        <li>
        Email to: {this.props.email['Email To']}
        </li>
        </ul>
      </div>
  );
}
}

export default ListItem;
