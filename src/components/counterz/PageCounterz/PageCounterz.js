import { useEffect, useRef, useState } from "react";
import CounterAdd from "../CounterAdd/CounterAdd";
import CounterList from "../CounterList/CounterList";

const PageCounterz = () => {
  const [state, setState] = useState();

  // Update
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      console.log("PageCounters#didUpdate");
    } else {
      mounted.current = true;
    }
  }, [state]);

  // Mount/unmount
  useEffect(() => {
    console.log("PageCounters#didMount");
    return () => {
      console.log("PageCounterz#willUnmout");
    };
  }, []);

  return (
    <div className="container page" id="counterz">
      <h1 onClick={() => setState(Math.random())}>Counterz</h1>
      <div className="row my-4">
        <CounterAdd />
      </div>
      <div className="row my-4">
        <CounterList />
      </div>
    </div>
  );
};

export default PageCounterz;
