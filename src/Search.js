import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  function Search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} definition`);
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
