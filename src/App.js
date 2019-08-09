import React, { Component } from "react";
import DisplayCooperResult from "./Components/DisplayCooperResult";
import InputFields from "./Components/InputFields";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import DisplayPerformanceData from "./Components/DisplayPerformanceData";
import { authenticate } from "./Modules/Auth";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: "",
      gender: "female",
      age: "",
      renderLoginForm: false,
      renderSignupForm: false,
      authenticated: false,
      email: "",
      password: "",
      message: "",
      entrySaved: false,
      renderIndex: false,
      updateIndex: false
    };
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true });
  }

  indexUpdated() {
    this.setState({ updateIndex: false });
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    });
  }

  hideLoginForm() {
    this.setState({ renderLoginForm: false });
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password);
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false });
    }
  }

  render() {
    let renderLogin;
    let user;
    let performanceDataIndex;
    let instructionText = `The Cooper Test was developed by Dr. Ken Cooper in 1968 as an easy way to measure aerobic fitness. To perform the test the athlete must warm up for 10 minutes, then run at the highest intensity possible for 12 minutes. After the 12 minute run is complete just insert the distance that was covered, and the gender and age of the athlete.`;

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem("credentials")).uid;
      renderLogin = <p className="user-greeting">Hi {user}</p>;
      performanceDataIndex = (
        <button
          id="show-index"
          onClick={() => this.setState({ renderIndex: true })}
        >
          Show past entries
        </button>
      );
      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <>
            <DisplayPerformanceData
              updateIndex={this.state.updateIndex}
              indexUpdated={this.indexUpdated.bind(this)}
            />
            <button
              className="hide-last-entries"
              onClick={() => this.setState({ renderIndex: false })}
            >
              Hide past entries
            </button>
          </>
        );
      } else {
        performanceDataIndex = (
          <button
            id="show-index"
            className="show-entries-button"
            onClick={() => this.setState({ renderIndex: true })}
          >
            Show past entries
          </button>
        );
      }
    } else {
      if (this.state.renderLoginForm === true && this.state.renderSignupForm === false){
        renderLogin = (
          <div>
            <div className="login-form-div">
              <LoginForm
                loginHandler={this.onLogin.bind(this)}
                inputChangeHandler={this.onChange.bind(this)}
              />
              <button
                id="hide"
                className="login-form-button"
                onClick={() =>
                  this.setState({ renderSignupForm: true })
                }
              >
                Sign Up
              </button>
              <button
                id="hide"
                className="login-form-button"
                onClick={() =>
                  this.setState({ renderLoginForm: false })
                }
              >
                Hide
              </button>
            </div>
          </div>
        );
      } else if (this.state.renderSignupForm === true){
        renderLogin = (
          <div className="login-form-div">
            <SignupForm />
            <button
              id="hide"
              className="login-form-button"
              onClick={() => this.setState({ renderSignupForm: false })}
            >
              Hide
            </button>
          </div>
        );
      } else {
        renderLogin = (
          <>
            <button
              className="login-button"
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p>{this.state.message}</p>
          </>
        );
      }
    }

    return (
      <div>
        <div className="login-button-div">{renderLogin}</div>
        <div className="title-div">
          <p className="title">COOPER TEST</p>
        </div>
        <div className="center-block">
          <div className="instructions-div">
            <div className="instructions-text">{instructionText}</div>
          </div>
          <div>
            <InputFields inputChangeHandler={this.onChange.bind(this)} />
          </div>
          <div className="display-result-div">
            <DisplayCooperResult
              distance={this.state.distance}
              gender={this.state.gender}
              age={this.state.age}
              authenticated={this.state.authenticated}
              entrySaved={this.state.entrySaved}
              entryHandler={this.entryHandler.bind(this)}
            />
          </div>
          {performanceDataIndex}
        </div>
      </div>
    );
  }
}

export default App;
