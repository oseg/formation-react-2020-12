// Andrés
import { memo } from "react";

const TodoAdd = () => {
  return (
    <input
      type="text"
      className="form-control form-control-lg"
      placeholder="Type to filter, press enter to add a new task"
      autoFocus
      // onChange={filtrage par texte}
      // onKeyPress={ajout d'un toto}
    />
  );
};

export default memo(TodoAdd);
