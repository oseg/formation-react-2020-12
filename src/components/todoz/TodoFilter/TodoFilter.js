// Andrés
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowDone } from "../actions";

const TodoFilter = () => {
  const showDone = useSelector((state) => state.todoz.showDone);
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(toggleShowDone());

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id="filterCheckbox"
        checked={showDone}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="filterCheckbox">
        Show terminated tasks
      </label>
    </div>
  );
};

export default memo(TodoFilter);
