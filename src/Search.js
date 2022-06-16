import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function Search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} definition`);

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
    </div>
  );
}
