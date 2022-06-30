import { Fragment } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Comments from "./Comments";
import HighlightedQuote from "./HighlightedQuote";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const quotes = [
    {
      id: 1,
      text: "Default quote",
      author: "Kranthi",
    },
  ];

  return (
    <Fragment>
      <HighlightedQuote text={quotes[0].text} author={quotes[0].author} />
      <Route path={`${match.url}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
