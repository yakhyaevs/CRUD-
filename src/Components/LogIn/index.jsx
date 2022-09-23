import React from "react";
import "./style.css";

// function Login ()  {
export default class Login extends React.Component {
  render() {
    return (
      <div className="input">
        <div className="box">
          <h3>Login | Register</h3>
          <div className="parentInput">
            <input className="childInput" type="text" placeholder="Email" />
            <input
              className="childInput"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <p>Remember?</p>
          </div>

          <button className="btn">Login</button>
          <p className="password"> Forger password?</p>
          <p className="accaunt">
            Create account <a onClick={this.props.onClick}>Register</a>
          </p>
        </div>
      </div>
    );
  }
}
