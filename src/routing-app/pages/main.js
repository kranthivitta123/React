import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import QuoteDetail from "../components/QuoteDetail";
import AllQuotes from "./AllQuotes";
import NewQuote from "./NewQuote";
import NotFound from "./NotFound";

const Main = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Main;
