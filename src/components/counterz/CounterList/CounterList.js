import CounterItem from "../CounterItem/CounterItem";
import { useSelector } from "react-redux";

/*
import { useEffect, useState } from "react";

const useStore = (select) => {
  const previous = useRef(select(window.store.getState()))

  const [data, setData] = useState(previous.current);

  useEffect(() => {
    const unsubscribe = window.store.subscribe(() => {
      const current = select(window.store.getState());
      if (previous.current !== current) {
        setData(current);
        previous.current = current;
      }
    });
    return () => {
      unsubscribe();
    };
  }, [select]);

  return data;
};

const select = (state) => {
  return state.labels;
};
*/

const CounterList = () => {
  const labels = useSelector((state) => state.labels);

  return (
    <ul className="list-unstyled">
      {labels.map((label) => {
        return (
          <li className="my-2" key={label}>
            <CounterItem label={label} />
          </li>
        );
      })}
    </ul>
  );
};

export default CounterList;
