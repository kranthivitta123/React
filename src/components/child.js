const Child = (props) => {
  const clickHandler = (event) => {
    props.parentMethod(event);
  };
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={clickHandler}>Pass data to parent</button>
    </div>
  );
};

export default Child;
