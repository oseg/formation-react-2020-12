import * as api from "./api";

const logMiddleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

const titleMiddleware = (store) => (next) => (action) => {
  if (action.type === "SET_TITLE") {
    document.title = action.payload;
    // black hole
  } else {
    next(action);
  }
};

// Version générique
// Cf. redux-axios-middleware
// cf. redux-thunk
const asyncMiddleware = (store) => (next) => (action) => {
  if (action.type === action.async) {
    const load = async () => {
      store.dispatch({ type: action.payload.type + "_START" });
      try {
        const payload = await action.payload();
        store.dispatch({
          type: action.payload.type + "_SUCCESS",
          payload,
        });
      } catch (err) {
        store.dispatch({
          type: action.payload.type + "_ERROR",
          payload: { message: err.message },
        });
      }
    };
    load();
  } else {
    next(action);
  }
};

const fetchTasksMiddleware = (store) => (next) => (action) => {
  if (action.type === "TODOZ_FETCH") {
    const load = async () => {
      store.dispatch({ type: "TODOZ_FETCH_START" });
      try {
        const tasks = await api.fetchTasks();
        store.dispatch({
          type: "TODOZ_FETCH_SUCCESS",
          payload: { tasks },
        });
      } catch (err) {
        store.dispatch({
          type: "TODOZ_FETCH_ERROR",
          payload: { message: err.message },
        });
      }
    };
    load();
  } else {
    next(action);
  }
};

export const middlewares = [
  logMiddleware,
  titleMiddleware,
  fetchTasksMiddleware,
  asyncMiddleware,
];
