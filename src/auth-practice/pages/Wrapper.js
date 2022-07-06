import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Layout from "../components/Layout";
import AuthPage from "./Auth";
import HomePage from "./Home";
import ProfilePage from "./Profile";

const Wrapper = () => {

  const ctx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile">
          { ctx.isLoggedIn && <ProfilePage />}{!ctx.isLoggedIn && <Redirect to="/auth"/>}
        </Route>
      </Switch>
    </Layout>
  );
};

export default Wrapper;
