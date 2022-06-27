import { useRef, useState } from "react";
import "./addGoals.css";

const AddGoal = (props) => {
  const addGoalRef = useRef();
  const [isValid, setValidity] = useState(true);
  const [enteredValue, setInputValue] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(addGoalRef.current.value)
    if (enteredValue.trim().length === 0) {
      setValidity(false);
      return;
    }
    props.pushGoal(enteredValue);
  };

  const changeHandler = (event) => {
    if (enteredValue.trim().length > 0) {
      setValidity(true);
    }
    setInputValue(event.target.value);
  };
  return (
    <div className="form-container">
      <form onSubmit={formSubmit}>
        <div className="form-control">
          <label>Add Goal</label>
          <input
            type="text"
            className={`${!isValid ? "invalid" : "valid"}`}
            onChange={changeHandler}
            ref={addGoalRef}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddGoal;
