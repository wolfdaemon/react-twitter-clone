import React, { Component } from "react";
import { Link } from "react-router-dom";
// webpages
class Navbar extends Component {


  render() {
    //Add | for format
    return (
      <div className="nav">
        <Link to="/">Home</Link> | 
        <Link to="/feed"> About</Link> | 
        <Link to="/meta"> Menu</Link>
      </div>
    );
  }

}

export default Navbar;