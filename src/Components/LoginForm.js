import React from "react";
import "../App.css";

const LoginForm = props => {
  return (
    <div id="login-form" className="login-form">
      <div className="login-form-title">WELCOME</div>
      <div className="login-form-element">
        <label>Email</label>
        <input
          className="input-box"
          id="email"
          onChange={props.inputChangeHandler}
        />
      </div>

      <div className="login-form-element">
        <label>Password</label>
        <input
          className="input-box"
          id="password"
          onChange={props.inputChangeHandler}
        />
      </div>
      <div className="login-form-element">
        <button
          className="login-form-button"
          onClick={e => props.loginHandler(e)}
          id="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginForm;