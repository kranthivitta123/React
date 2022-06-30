import { useEffect } from "react";
import { getAllQuotes } from "../api/api";
import LoadingSpinner from "../components/LoadingSpinner";
import QuoteList from "../components/QuoteList";
import useHttp from "../hooks/use-http";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <h1>No quotes found</h1>;
  }
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
