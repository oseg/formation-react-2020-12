import type { TodozAddPayload } from "./actions";

type State = {
  loading: boolean,
  error: ?string,
  tasks: Array<{
    id: string,
    label: string,
    done: boolean,
    tagLabels: Array<string>,
  }>,
  showDone: boolean,
};

export const initialState: State = {
  loading: false,
  error: null,
  tasks: [],
  showDone: true,
};

export const reducer = (state: State = initialState, action: Action<any>) => {
  switch (action.type) {
    case "TODOZ_FETCH_START":
      return { ...initialState, loading: true };
    case "TODOZ_FETCH_ERROR":
      return { ...initialState, loading: false, error: action.payload.message };
    case "TODOZ_FETCH_SUCCESS":
      return { ...initialState, loading: false, tasks: action.payload.tasks };

    case "TODOZ_TOGGLE_SHOWDONE": {
      return {
        ...state,
        showDone: !state.showDone,
      };
    }
    case "TODOZ_ADD": {
      // immutable.js
      const payload: TodozAddPayload = action.payload;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: payload.id,
            label: payload.label,
            tagLabels: payload.tagLabels,
            done: false,
          },
        ],
      };
    }
    case "TODOZ_TOGGLE_TASK": {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, done: !task.done } : task
        ),
      };
    }
    case "TODOZ_SUPPR_TASK": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    }
    // TODO filter by text
    case "TODOZ_DELETE_TASK": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
