import React from "react";
import "./style.css";

// function Login ()  {
export default class Login extends React.Component {
  render() {
    return (
      <div className="input">
        <div className="box">
          <h3>Kirish</h3>
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
          <div className="checkbox">
            <input type="checkbox" />
            <p>Eslab qolinsinmi?</p>
          </div>

          <button className="btn"> Login</button>
          <p className="password"> Parolni unutdingizmi?</p>
          <p className="accaunt">
            Akkaunt ochish <a onClick={this.props.onClick}>Ro'yhatdan o'tish</a>
          </p>
        </div>
      </div>
    );
  }
}
