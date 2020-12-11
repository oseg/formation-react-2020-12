// Olivier

/* pas d'HTML */

import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const tasks = useSelector((state) => state.todoz.tasks);
  return (
    <>
      {tasks.map(({ label, tagLabels, done }) => {
        return (
          <TodoItem
            key={label}
            label={label}
            tagLabels={tagLabels}
            done={done}
          />
        );
      })}
    </>
  );
};

export default TodoList;
