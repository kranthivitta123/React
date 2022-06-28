import { useContext } from "react";
import SampleContext from "../store/sample-context";

const GoalList = (props) => {
  const ctx = useContext(SampleContext);
  return (
    <div>
      <h1>Use context value : {ctx.isLoggedIn ? "Logged " : "Out"}</h1>
      {props.goal.map((value, index) => {
        return <h1 key={index}>{value}</h1>;
      })}
    </div>
  );
};

export default GoalList;
