import { useState } from "react";
import { v4 as uuid } from "uuid";

const generateUniqueId = () => {
  console.log("call uuid");
  return uuid();
};

const CounterItem = ({ label }) => {
  const [value, setValue] = useState(1);

  const [id] = useState(() => generateUniqueId());

  const handleClick = (e) => {
    e.preventDefault();
    setValue(value + 1);
  };

  return (
    <div
      className="input-group"
      title={`Click to increment counter “${label}”`}
    >
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor={id}>
          <code>{label}</code>
        </label>
      </div>
      <div className="input-group-append">
        <button
          id={id}
          className="btn btn-info"
          type="button"
          onClick={handleClick}
        >
          {value}
        </button>
      </div>
    </div>
  );
};

export default CounterItem;
