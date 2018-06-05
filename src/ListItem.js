import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ListItemCollapse from './listItemCollapse.js';


  class ListItem extends Component {
    componentDidMount() {
      var emailPath = require("./TEXT/"+ this.props.email['Control Number'] + ".txt");
      var text = httpGet(emailPath);
  console.log(text)
  var containsPhoneNumber = phonenumber(text);
function phonenumber(inputtxt) {
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(inputtxt.value.match(phoneno)) {
  return true;
}
else {
  alert("message");
  return false;
}
}
function httpGet(theUrl)
{
        var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();
}
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
