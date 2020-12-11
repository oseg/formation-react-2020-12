import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import reportWebVitals from "./lib/reportWebVitals";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { reducer as counterzReducer } from "./components/counterz/reducer";
import { reducer as todozReducer } from "./components/todoz/reducer";
import { middlewares } from "./lib/middlewares";

/*
const initialState = {
  todoz: todozInitialState,
  counterz: counterzInitialState,
}

const reducer = (state = initialState, action) => {
  return {
    todoz: todozReducer(state.todoz, action),
    counterz: counterzReducer(state.counterz, action)
  }
}
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    todoz: todozReducer,
    counterz: counterzReducer,
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);

// window.store = store;

/*
window.store = {
  _data: initialState,

  dispatch: (action) => {
    window.store._data = reducer(window.store._data, action);
    window.store._handlers.forEach((fn) => fn());
  },

  _handlers: [],
  getData: () => window.store._data,

  subscribe: (fn) => {
    window.store._handlers.push(fn);
    return () => {
      window.store._handlers = window.store._handlers.filter((f) => f !== fn);
    };
  },
};
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
