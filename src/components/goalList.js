const GoalList = (props) => {
  return (
    <div>
      {props.goal.map((value, index) => {
        return <h1 key={index}>{value}</h1>;
      })}
    </div>
  );
};

export default GoalList;
