// Andrés

import { memo, useEffect } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoList from "../TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../actions";

const PageTodoz = () => {
  // On mount: fetch tasks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const loading = useSelector((state) => state.todoz.loading);

  return (
    <div className="container page">
      <h1>Todoz</h1>
      {loading && <p>Loading…</p>}
      {!loading && (
        <>
          <div className="form-group my-4">
            <TodoAdd />
            <TodoFilter />
          </div>
          <TodoList />
        </>
      )}
    </div>
  );
};

export default memo(PageTodoz);
