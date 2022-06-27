import "./App.css";
import GoalContainer from "./components/goalContainer";
import ReactDOM from "react-dom";

const Empty = () => {
  return <p>Inside portal</p>;
};

function App() {
  return (
    <div className="App">
      <GoalContainer />
      {ReactDOM.createPortal(<Empty />, document.getElementById("portal"))}
    </div>
  );
}

export default App;
