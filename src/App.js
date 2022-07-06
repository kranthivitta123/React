import "./App.css";
//import Counter from "./redux-practice/components/Counter";
// import CounterLayout from "./redux-practice/pages/CounterLayout";
import store from "./redux-practice/store";
import { Provider } from "react-redux";
import Wrapper from "./auth-practice/pages/Wrapper";
// import AuthContextProvider from "./store/auth-context";
// import GoalContainer from "./components/goalContainer";
// import ReactDOM from "react-dom";
// import Reduce from "./components/reducerPractice";
// import SampleContext from "./store/sample-context";
// import { useState } from "react";
// import Home from "./food-order/pages/Home";
//import Main from "./routing-app/pages/main";

// const Empty = () => {
//   return <p>Inside portal</p>;
// };

function App() {
  // const [isLoggedIn, setLoginFlag] = useState(false);
  // const changeContext = () => {
  //   setLoginFlag(false);
  // };

  return (
    // <div className="App">
    //   <Reduce />
    //   <SampleContext.Provider
    //     value={{ isLoggedIn: isLoggedIn, changeFlag: changeContext }}
    //   >
    //     <GoalContainer />
    //   </SampleContext.Provider>
    //   {ReactDOM.createPortal(<Empty />, document.getElementById("portal"))}
    //   <button onClick={() => setLoginFlag(!isLoggedIn)}>
    //     Change Context flag
    //   </button>
    // </div>
    // <Home/>
    // <Main/>
    <Provider store={store}>
      {/* <CounterLayout /> */}
      <Wrapper />
    </Provider>
  );
}

export default App;
