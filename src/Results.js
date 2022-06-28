import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results && Object.keys(props.results).length > 0) {
    return (
      <div className="Results">
        <h2 className="Word"> {props.results.word} </h2>

        <Phonetic phonetic={props.results.phonetics[0]} />

        <h4>
          <strong> Definition of {props.results.word} </strong>
          <hr />
        </h4>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else if (props.results && Object.keys(props.results).length === 0) {
    return <div className="Results">Could not find any results</div>;
  } else {
    return null;
  }
}
