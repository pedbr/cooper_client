import React from "react";

const InputFields = props => {
  return (
    <div className="input-data-div">
      <div className="input-data-form">
        <div className="input-data-element">
          <label>Distance</label>
        </div>
        <div className="input-data-element">
          <input
            className="input-box"
            id="distance"
            onChange={props.inputChangeHandler}
          />
        </div>
        <div className="input-data-element">
          <select
            className="input-box"
            id="gender"
            onChange={props.inputChangeHandler}
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="input-data-element">
          <label>Age</label>
        </div>
        <div className="input-data-element">
          <input
            className="input-box"
            id="age"
            onChange={props.inputChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default InputFields;