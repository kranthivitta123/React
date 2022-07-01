import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import counterSlice from "./counter-slice";
// import { createStore } from "redux";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   } else if (action.type === "DECREMENT") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   } else if (action.type === "INCREASE") {
//     return {
//       ...state,
//       counter: state.counter + action.payload,
//     };
//   } else if (action.type === "TOGGLE") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

//const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counterSlice: counterSlice.reducer, authSlice: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
