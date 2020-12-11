type Action<U> = { type: string, payload: U };
type ActionCreator<U> = () => Action<U>;

export type TodozAddPayload = { label: string, tagLabels: Array<string> };

export const addTodo: ActionCreator<TodozAddPayload> = (
  label: string,
  tagLabels: Array<string> = []
) => ({
  type: "TODOZ_ADD",
  payload: {
    label,
    tagLabels,
  },
});
