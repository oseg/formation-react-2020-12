// Olivier

/* pas d'HTML */

import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const tasks = useSelector((state) => state.todoz.tasks);
  const showDone = useSelector((state) => state.todoz.showDone);

  return (
    <>
      {tasks.map(({ label, tagLabels, done, id }) => {
        return (
          (showDone || !done) && (
            <TodoItem
              id={id}
              label={label}
              tagLabels={tagLabels}
              done={done}
              key={id}
            />
          )
        );
      })}
    </>
  );
};

export default TodoList;
