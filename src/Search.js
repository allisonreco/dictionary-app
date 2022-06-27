import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={Search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Type a word..."
        ></input>
      </form>

      <div className="SearchResults">
        <Results results={results} />
      </div>
    </div>
  );
}
