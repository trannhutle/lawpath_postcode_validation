import React, { Suspense } from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

function render(ui, { store = configureStore(), ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <Provider store={store}>{children}</Provider>
      </Suspense>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
