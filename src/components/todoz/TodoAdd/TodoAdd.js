// Andrés
import { memo } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const TodoAdd = () => {
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const tagLabels = [...e.target.value.matchAll(/#([^\s]+)/g)].map(
        (a) => a[1]
      );
      const label = e.target.value.replace(/(^| )#[^\s]+( |$)/g, " ");
      dispatch(addTodo(label, tagLabels));
    }
  };

  return (
    <input
      type="text"
      className="form-control form-control-lg"
      placeholder="Type to filter, press enter to add a new task"
      autoFocus
      // onChange={filtrage par texte}
      onKeyPress={handleKeyPress}
    />
  );
};

export default memo(TodoAdd);
