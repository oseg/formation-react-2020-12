// Andrés

import { memo } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoList from "../TodoList/TodoList";

const PageTodoz = () => {
  return (
    <div className="container page">
      <h1>Todoz</h1>
      <div className="form-group my-4">
        <TodoAdd />
        <TodoFilter />
      </div>
      <TodoList />
    </div>
  );
};

export default memo(PageTodoz);
