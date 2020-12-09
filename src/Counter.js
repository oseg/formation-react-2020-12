import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(1);
  const handleClick = (e) => {
    e.preventDefault();
    setValue(value + 1);
  };

  return <button onClick={handleClick}>{value}</button>;
};

export default Counter;
