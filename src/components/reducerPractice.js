import { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Reduce = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isStateValid, setStateValid] = useState(false);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  useEffect(() => {
    if (state.count > 0) {
      setStateValid(true);
    }
  }, [state]);

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <>
      <h1>Reduce Practice</h1>
      <p>
        Count:{state.count} {isStateValid}
      </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Reduce;
