import React from "react";

export default function Synonyms(props) {
  console.log(props);

  if (props.synonyms?.length > 0) {
    return (
      <div className="Synonyms">
        <em>Synonyms: </em>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}> {synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
