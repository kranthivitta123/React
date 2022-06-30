import QuoteList from "../components/QuoteList";

const AllQuotes = () => {
  const quotes = [
    {
      id: 1,
      text: "Default quote",
      author: "Kranthi",
    },
    {
      id: 2,
      text: "Second",
      author: "Vitta",
    },
  ];
  return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
