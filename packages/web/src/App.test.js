// __tests__/fetch.test.js
import React from "react";

import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;
import "@testing-library/jest-dom/extend-expect";

import { render } from "./test-utils";
import {
  fireEvent,
  screen,
  cleanup,
  act,
  within,
  queryByAttribute,
  waitForDomChange,
  waitForElementToBeRemoved,
  waitForElement,
  waitFor,
  wait,
} from "@testing-library/react";
import App from "./App";
// afterEach(cleanup);

// describe("Error input test", () => {
//   it("Test missing required field", () => {});
// });

test("loads and displays greeting", async () => {
  const { debug, container, getByTestId, queryByText, getByText } = render(<App />);

  expect(screen.getByText("Loading")).toBeInTheDocument();
  await waitFor(() => {
    expect(getByText("postcode.find")).toBeInTheDocument();
  });

  const surburbTxt = getByTestId("location");
  const postCodeText = container.querySelector('input[name="postcode"]');
  const stateSelect = container.querySelector('input[name="state"]');

  fireEvent.change(surburbTxt, {
    target: {
      value:
        "Austrlaliacccc",
    },
  });


  fireEvent.change(postCodeText, { target: { value: 2222 } });

  await waitFor(() => {
    fireEvent.change(stateSelect, { target: { value: "ACT" } });
  });
  expect(stateSelect.value).toBe("ACT");

  const submitBtn = container.querySelector("#findBtn");
  fireEvent.click(submitBtn);




  
  await waitFor(() => {
    expect(getByText("is not found")).toBeInTheDocument();
  });
  // await within(container).findByText("is not found");

  // console.log(wrapper.find("is not found").debug());

  // await waitFor(() => {
  //   expect(
  //     container.querySelector("Mui-error")
  //   ).toBeInTheDocument();
  // });
});
