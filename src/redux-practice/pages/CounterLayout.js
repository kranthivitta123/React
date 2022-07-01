import Auth from "../components/Auth";
import Counter from "../components/Counter";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const CounterLayout = () => {
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);
  return (
    <Fragment>
      <Header />
      {!isLoggedIn && <Auth />}
      <Counter />
    </Fragment>
  );
};

export default CounterLayout;
