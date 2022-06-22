import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        <h2> {props.results.word} </h2>
        <h3>
          [ je-stik-yuh-leyt ] <span>🔊</span>
        </h3>
        <h4>Meaning</h4>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}

        <p>“make or use gestures,” especially in an excited manner</p>

        <h4>synonyms</h4>
        <p>gesture, motion, wave, signal.</p>

        <h4>Phrase</h4>
        <p>
          At first he kept his hands behind his back in a tight knot; then he
          began to gesticulate as he turned.
        </p>
      </div>
    );
  } else {
    return null;
  }
}
