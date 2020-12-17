import * as api from "../../lib/api";

type Action<U> = { type: string, payload: U };
type ActionCreator<U> = () => Action<U>;

export type TodozAddPayload = {
  id: string,
  label: string,
  tagLabels: Array<string>,
};

export const addTodo: ActionCreator<TodozAddPayload> = (
  id: string,
  label: string,
  tagLabels: Array<string> = []
) => ({
  type: "TODOZ_ADD",
  payload: {
    id,
    label,
    tagLabels,
  },
});

export const toggleShowDone: ActionCreator<undefined> = () => ({
  type: "TODOZ_TOGGLE_SHOWDONE",
});

export const toggleTask = (id) => ({
  type: "TODOZ_TOGGLE_TASK",
  payload: { id },
});

export const supprTask = (id) => ({
  type: "TODOZ_SUPPR_TASK",
  payload: { id },
});

export const fetchTasks = () => ({
  type: "TODOZ_FETCH",
  async: true,
  payload: async () => {
    const tasks = api.fetchTasks();
    return { tasks };
  },
});

export const fetchTasksReduxThunk = () => async (dispatch) => {
  dispatch({ type: "TODOZ_FETCH_START" });
  try {
    const tasks = await api.fetchTasks();
    dispatch({
      type: "TODOZ_FETCH_SUCCESS",
      payload: { tasks },
    });
  } catch (err) {
    dispatch({
      type: "TODOZ_FETCH_ERROR",
      payload: { message: err.message },
    });
  }
};
