import { useHistory } from "react-router-dom";
import { addQuote } from "../api/api";
import QuoteForm from "../components/QuoteForm";
import useHttp from "../hooks/use-http";

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest } = useHttp(addQuote);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
