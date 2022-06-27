import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong> Definition: </strong> {definition.definition}
              <br />
            </p>

            <h4>synonyms</h4>
            <p>
              <Synonyms synonyms={definition.synonyms} />
            </p>

            <h4>Example</h4>
            <p>{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
