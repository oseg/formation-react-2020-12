import logo from "./logo.svg";
import "./App.scss";
import BtnCounterList from "./BtnCounterList";
import { v4 as uuid } from "uuid";
import { useCallback, useState } from "react";
import BtnCounterAdd from "./BtnCounterAdd";

function App() {
  const [counterIds, setCounterIds] = useState([]);
  const [toggled, setToggled] = useState(false);

  const addCounter = useCallback(() => {
    setCounterIds([uuid(), ...counterIds]);
  }, [counterIds]);

  return (
    <div className="App">
      <h1>Awesome counters</h1>
      <span onClick={() => setToggled(!toggled)}>{toggled ? "Yes" : "No"}</span>
      <BtnCounterAdd onAddCounter={addCounter} />
      <BtnCounterList counterIds={counterIds} />
    </div>
  );
}

export default App;
