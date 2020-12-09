import logo from "./logo.svg";
import "./App.scss";
import BtnCounterList from "./BtnCounterList";

function App() {
  return (
    <div className="App">
      <h1>Awesome counters</h1>
      <button>Add counter</button>
      <BtnCounterList />
    </div>
  );
}

export default App;
