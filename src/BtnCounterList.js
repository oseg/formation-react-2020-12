import Counter from "./Counter";

const BtnCounterList = ({ counterIds }) => {
  return (
    <ul>
      {counterIds.map((counter) => {
        return (
          <li key={counter}>
            <Counter />
          </li>
        );
      })}
    </ul>
  );
};

export default BtnCounterList;
