// __tests__/fetch.test.js
import React from "react";

import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;
import "@testing-library/jest-dom/extend-expect";

import { render } from "./test-utils";
import { fireEvent, screen, cleanup, waitFor } from "@testing-library/react";
import App from "./App";

const testSuitesData = [
  {
    describe: "Show Surburb not found error message",
    location: "Goulburn_N",
    postcode: 3333,
    state: "ACT",
    expectedResult: "postcode.errorMsgs.location",
  },
  {
    describe: "Show Postcode not match Surburb error message",
    location: "Macquarie Park",
    postcode: 5333,
    state: "ACT",
    expectedResult: "postcode.errorMsgs.postcode",
  },
  {
    describe: "Show State does not include surburb error message",
    location: "Macquarie Park",
    postcode: 2113,
    state: "ACT",
    expectedResult: "postcode.errorMsgs.state",
  },
  {
    describe: "Show State does not include surburb error message",
    location: "Macquarie Park",
    postcode: 2113,
    state: "NSW",
    expectedResult: "postcode.successMsg",
  },
];

let utils = null;

describe("Test postcode form submission", async () => {
  let surburbText, postcodeText, stateSelect, submitBtn;
  beforeEach(async () => {
    utils = render(<App />);
    await waitFor(() => {
      expect(screen.getByText("postcode.find")).toBeInTheDocument();
    });
    surburbText = utils.getByTestId("location");
    postcodeText = utils.getByTestId("postcode");
    stateSelect = utils.getByTestId("state");
    submitBtn = utils.getByText("postcode.find").parentNode;
  });

  afterEach(() => {
    cleanup();
  });

  testSuitesData.map((testData) => {
    it(testData.describe, async () => {
      fireEvent.change(surburbText, { target: { value: testData.location } });
      fireEvent.change(postcodeText, { target: { value: testData.postcode } });
      fireEvent.change(stateSelect, { target: { value: testData.state } });
      fireEvent.click(submitBtn);

      await waitFor(() => {
        expect(utils.getByText(testData.expectedResult)).toBeInTheDocument();
      });
    });
  });
});
