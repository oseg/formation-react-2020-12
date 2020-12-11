// Andrés
import { memo } from "react";

const TodoFilter = () => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id="filterCheckbox"
        checked
      />
      <label className="form-check-label" for="filterCheckbox">
        Show terminated tasks
      </label>
    </div>
  );
};

export default memo(TodoFilter);
