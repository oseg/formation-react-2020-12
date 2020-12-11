import type { TodozAddPayload } from "./actions";

type State = {
  tasks: Array<{
    label: string,
    done: boolean,
    tagLabels: Array<string>,
  }>,
};

export const initialState: State = {
  tasks: [
    { label: "Coucou", done: false, tagLabels: ["politesse"] },
    { label: "Hello", done: true, tagLabels: ["english"] },
  ], // Array<{ label: string, done: boolean, tagLabels: Array<string> }>
};

export const reducer = (state: State = initialState, action: Action<any>) => {
  switch (action.type) {
    case "TODOZ_ADD": {
      // immutable.js
      const payload: TodozAddPayload = action.payload;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            label: payload.label,
            tagLabels: payload.tagLabels,
            done: false,
          },
        ],
      };
    }
    default:
      return state;
  }
};
