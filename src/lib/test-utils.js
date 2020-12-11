import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { middlewares } from "./middlewares";
import { reducer } from "./reducer";

export const renderWithStore = (element) => {
  const store = createStore(reducer, applyMiddleware(...middlewares));
  return render(<Provider store={store}>{element}</Provider>);
};
