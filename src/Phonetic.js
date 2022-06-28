import React from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
    console.log(props)
  return (
    <div className="Phonetic">
      <p>
        [{props.phonetic.text}] &nbsp;
        <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faVolumeHigh} />
        </a>
      </p>
    </div>
  );
}
