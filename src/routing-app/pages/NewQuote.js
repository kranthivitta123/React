import { useHistory } from "react-router-dom";
import QuoteForm from "../components/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    // sendRequest(quoteData);
    console.log("Added Quote", quoteData);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
