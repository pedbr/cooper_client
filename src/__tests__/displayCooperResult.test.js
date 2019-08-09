import React from "react";
import { shallow } from "enzyme";

import DisplayCooperResult from "../Components/DisplayCooperResult";

describe("<DisplayCooperResult />", () => {
  it("evaluates the correct result for female/poor", () => {
    const describedComponent = shallow(
      <DisplayCooperResult distance="1000" gender="female" age="23" />
    );
    const response = 'POOR';
    expect(describedComponent.contains(response)).toEqual(true);
  });

  it("evaluates the correct result for female/average", () => {
    const describedComponent = shallow(
      <DisplayCooperResult distance="2000" gender="female" age="23" />
    );
    const response = 'AVERAGE';
    expect(describedComponent.contains(response)).toEqual(true);
  });
});
