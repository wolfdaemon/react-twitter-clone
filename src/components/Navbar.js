import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";
// webpages
class Navbar extends Component {


  render() {
    return (
      <nav className="nav">
        <div className="nav-logo">
          <h1 className="font-orange">Quacker</h1>
        </div>
        <div className="nav-userid">
          <h2 className="font-white">@{window.id}</h2>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link> 
          <Link to="/feed"> Feed</Link>
          <Link to="/meta"> Menu</Link>
        </div>
      </nav>
    );
  }

}

export default Navbar;