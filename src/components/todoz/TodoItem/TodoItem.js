// Olivier

/*
    ↓ Opacity en fonction du statut ↓

    <div class="card my-2 container" style="opacity:0.5">

      ↓ Class "text-muted" en fonction du statut ↓

      <div class="card-body text-muted row">
        <div class="col col-auto text-left">
          <button type="button" class="btn btn-ghost">
            Icône en fonction du statut

            ↓ Icon Uncheck ↓

            <IconSquare />

            ↓ Icon Check ↓

            <IconCheck checked />

          </button>
        </div>
        <div class="col">
          <h3>Chercher une formation React</h3>

          ↓ Tags ↓
          <span class="badge badge-pill badge-secondary">react</span>
          <span class="badge badge-pill badge-secondary">formation</span>
          <span class="badge badge-pill badge-dark">done</span>
        </div>
        <div class="col col-auto text-right">
          <button type="button" class="btn btn-danger">
            <IconTrash />
          </button>
        </div>
      </div>
    </div>
*/

import IconTrash from "../../icons/IconTrash";
import IconSquare from "../../icons/IconSquare";
import cx from "classnames";

import "./TodoItem.scss";

const renderTags = (tagLabels) => {
  return tagLabels.map((label) => {
    return (
      <span key={label} className="badge badge-pill badge-secondary mr-1">
        {label}
      </span>
    );
  });
};

const TodoItem = ({ label, tagLabels, done = false }) => {
  return (
    <div className={cx("card my-2 container TodoItem", { done })}>
      <div className={cx("card-body row", { "text-muted": done })}>
        <div className="col col-auto text-left">
          <button type="button" className="btn btn-ghost">
            {done && <IconSquare checked />}
            {!done && <IconSquare />}
          </button>
        </div>
        <div className="col">
          <h3>{label}</h3>
          {renderTags(tagLabels)}
          <span className="badge badge-pill badge-dark">
            {done ? "done" : "todo"}
          </span>
        </div>
        <div class="col col-auto text-right">
          <button type="button" class="btn btn-danger">
            <IconTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
