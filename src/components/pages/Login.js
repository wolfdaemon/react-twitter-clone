import React from "react";
import User from "../User";
import Meta from "./Meta";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-login">
          <h2 className="font-orange font-login">Username:</h2>
          <User />
        </div>
        <div className="nav-login nav-center">
          <Meta />
        </div>
      </div>
    );
  }
}

//        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2a%2F7c%2F95%2F2a7c95acc6a4e64c71795e9b65e5eaaf.png&f=1&nofb=1" alt="cutie"></img>
export default Login;