const BtnCounterAdd = ({ onAddCounter }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onAddCounter();
  };

  return <button onClick={handleClick}>Add counter</button>;
};

export default BtnCounterAdd;
