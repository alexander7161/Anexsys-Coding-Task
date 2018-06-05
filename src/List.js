import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ListItem from './ListItem.js';

  class List extends Component {
  render() {
    var i = 0;
    return (
      <ListGroup>
      {this.props.data.map(email => (
        <ListItem email={email} key={email['Control Number']} />
          ))}
            </ListGroup>
    );

  }

}

export default List;
