import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";
import App from "../App";
import axios from "axios";

jest.mock("axios");

it("can fetch a list of comment and display them", () => {
  axios.get.mockImplementationOnce(() => Promise.resolve(data));
  // Attempt to render the component
  const Wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the fetch button and click it

  //Expect to find a list of component
});
