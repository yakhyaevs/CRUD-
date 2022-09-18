import React from "react";
import "./style.css";

export default class Login extends React.Component {
  render() {
    return (
      <div className="input">
        <div className="box">
          <h3>Ro'yhatdan o'tish</h3>
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
          <button className="btn"> Kirish</button>
          {/* <p className='password'> Forgot password?</p> */}
          <div className="user">
            <p>Ro'yhatdan o'tganmisiz? </p>{" "}
            <a onClick={this.props.onClick}> Kirish</a>
          </div>
        </div>
      </div>
    );
  }
}
