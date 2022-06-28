import { useRef, useState } from "react";
import SampleContext from "../store/sample-context";
import "./addGoals.css";

const AddGoal = (props) => {
  const addGoalRef = useRef();
  const [isValid, setValidity] = useState(true);
  const [enteredValue, setInputValue] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(addGoalRef.current.value);
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
    <SampleContext.Consumer>
      {(ctx) => {
        return (
          <div className="form-container">
            <form onSubmit={formSubmit}>
              <div className="form-control">
                <h1>SampleContextFlag : {ctx.isLoggedIn ? "Logged" : "Out"}</h1>
                <label>Add Goal</label>
                <input
                  type="text"
                  className={`${!isValid ? "invalid" : "valid"}`}
                  onChange={changeHandler}
                  ref={addGoalRef}
                />
              </div>
              <button type="submit">Submit</button>
              <button type="button" onClick={ctx.changeFlag}>
                Eject Context
              </button>
            </form>
          </div>
        );
      }}
    </SampleContext.Consumer>
  );
};

export default AddGoal;
