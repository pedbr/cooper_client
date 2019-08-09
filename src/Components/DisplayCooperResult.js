import React, { Component } from "react";
import CooperCalculator from "../Modules/CooperCalculator";
import { saveData } from '../Modules/PerformanceData';
import "../App.css";

class DisplayCooperResult extends Component {
  calculate() {
    return CooperCalculator(
      this.props.distance,
      this.props.gender,
      this.props.age
    );
  }

  async saveCooperData() {
    const result = this.calculate();
    try {
      await saveData(result);
      this.props.entryHandler();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let results;
    let saveButton;

    if (
      this.props.authenticated === true &&
      this.props.entrySaved === false
    ) {
      saveButton = (
        <>
          <button id="save-result" onClick={this.saveCooperData.bind(this)}>
            Save entry
          </button>
        </>
      );
    } else if (
      this.props.authenticated === true &&
      this.props.entrySaved === true
    ) {
      saveButton = (
        <>
          <p>Your entry was saved</p>
        </>
      );
    }
    if (this.props.age !== "" && this.props.distance !== "") {
      results = (
        <>
          <div>
            <div className="result-element">
              {this.props.age} years old {this.props.gender}
            </div>
            <div className="result-element">
              Running {this.props.distance} meters.
            </div>
          </div>
          <div>
            <div className="result-word">Result:</div>
            <div className="result-actual">{this.calculate()}</div>
          </div>
          {saveButton}
        </>
      );
    } 
    if (this.props.age === "" || this.props.distance === "") {
      results = (
          <div className="results-placeholder">RESULTS WILL SHOW HERE</div>
      );
    }
    return <div className="results-box">{results}</div>;
  }
}

export default DisplayCooperResult;
