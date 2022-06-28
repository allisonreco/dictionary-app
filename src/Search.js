import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";
import Photos from "./Photos";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState("");

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleDictionaryError(error) {
    setResults({});
  }

  function handlePexelsError(error) {
    console.error(error);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios
      .get(apiUrl)
      .then(handleDictionaryResponse)
      .catch(handleDictionaryError);

    const pexelsApiKey =
      "563492ad6f9170000100000191045daa90304e4694ba360c0668ee61";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, { headers: headers })
      .then(handlePexelsResponse)
      .catch(handlePexelsError);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <div className="SearchHeader">
        <Header />
        <div>
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder="Type a word..."
            />

            <button onClick={search}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </div>

      <div className="SearchResults">
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    </div>
  );
}
