import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";
// webpages
class Navbar extends Component {


  render() {
    return (
      <nav>
        <div className="nav-logo nav-center">
          <h1 className="font-orange font-logo">Quacker</h1>
        </div>
        {/* I think show ID here will make the website look uglier
            Consider to change it.
         <div className="nav-userid">
          <h2 className="font-white">@{window.id}</h2>
        </div> */}
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