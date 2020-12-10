import { addCounter } from "../actions";
import IconPlus from "../../icons/IconPlus";
import { useDispatch } from "react-redux";

const CounterAdd = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addCounter());
  };

  return (
    <button
      type="button"
      className="btn btn-outline-primary btn-lg"
      title="Click to add a new counter"
      onClick={handleClick}
    >
      <IconPlus />
      <span className="ml-2">Add counter</span>
    </button>
  );
};

export default CounterAdd;
