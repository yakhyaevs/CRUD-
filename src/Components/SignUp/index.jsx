import React from "react";
import "./style.css";

export default class Login extends React.Component {
  render() {
    return (
      <div className="input">
        <div className="box">
          <h3>Register</h3>
          <div className="parentInput">
            <input
              className="childInput"
              type="text"
              placeholder="Email ni kiriting"
            />
            <input
              className="childInput"
              type="password"
              placeholder="Parolni kiriting"
            />
          </div>
          {/* <div className="checkbox">
            <input type="checkbox"  />
            <p>Remember me?</p>
         </div> */}
          <button className="btn">Login</button>
          {/* <p className='password'> Forgot password?</p> */}
          <div className="user">
            <p>Already have an account </p>{" "}
            <a onClick={this.props.onClick}> Login</a>
          </div>
        </div>
      </div>
    );
  }
}
