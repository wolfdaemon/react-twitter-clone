import React from "react";

class Feed extends React.Component {
  //insert this into Component to get saved id.
  constructor() {
    super();
    this.id = localStorage.getItem('userId');
  }

  render(){
    return(
      <div>
        <h2>What's New, Nephew? B)</h2>
        <h2>Hello {this.id}</h2>
        {/* insert note/post here */}
      </div>
    );
  }
}

export default Feed;