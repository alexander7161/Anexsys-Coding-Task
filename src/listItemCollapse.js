import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Collapse} from 'reactstrap';

  class ListItemCollapse extends Component {
  render() {
    return (
      <Collapse isOpen={this.props.isOpen}>
        Hello
      </Collapse>
    );
  }
}

export default ListItemCollapse;
