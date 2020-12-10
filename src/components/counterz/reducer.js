import { v4 as uuid } from "uuid";

export const initialState = {
  labels: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTERZ_ADD":
      return {
        ...state,
        labels: [...state.labels, uuid()],
      };
    default:
      return state;
  }
};
