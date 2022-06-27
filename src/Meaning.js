import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      
      <h4>{props.meaning.partOfSpeech} </h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li> {definition.definition}</li>
              <em> {definition.example}</em>
            </ul>
          </div>
        );
      })}

      
        <Synonyms synonyms={props.meaning.synonyms} />
      
    </div>
  );
}
