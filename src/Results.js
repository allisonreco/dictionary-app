import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
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
  } else {
    return null;
  }
}
