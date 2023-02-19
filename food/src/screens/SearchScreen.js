import { React, useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView, useWindowDimensions, View } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const filterByPrice = (results, price) => {
  return results.filter((business) => (business.price ? business.price === price : false));
};

const SearchScreen = () => {
  const { height } = useWindowDimensions();
  const [term, setTerm] = useState("");
  const { searchApi, results, errorMessage } = useResults();

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList title="Cost Effective" results={filterByPrice(results, "$")} />
        <ResultsList title="Bit Pricier" results={filterByPrice(results, "$$")} />
        <ResultsList title="Big Spender" results={filterByPrice(results, "$$$")} />
        <ResultsList title="I'm Gonna Be Broke" results={filterByPrice(results, "$$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default SearchScreen;
