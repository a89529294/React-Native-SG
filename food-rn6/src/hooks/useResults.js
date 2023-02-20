import { useState } from "react";
import yelp from "../api/yelp";

export default function useResults() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          location: "san jose",
          limit: 50,
          term: searchTerm,
        },
      });
      setErrorMessage("");
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong!");
    }
  };

  return {
    results,
    errorMessage,
    searchApi,
  };
}
