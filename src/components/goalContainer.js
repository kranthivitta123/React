import React, { useState } from "react";
import AddGoal from "./addGoals";
import GoalList from "./goalList";

const GoalContainer = () => {
  const [goals, setGoals] = useState(["Do All Exercises", "Finish Courses"]);
  const addGoal = (data) => {
    setGoals((prev) => {
      return [data, ...prev];
    });
  };
  return (
    <React.Fragment>
      <AddGoal pushGoal={addGoal} />
      <GoalList goal={goals} />
    </React.Fragment>
  );
};

export default GoalContainer;
