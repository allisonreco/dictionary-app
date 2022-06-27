import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
    console.log(props)
  return (
    <div>
      <h3>
        [{props.phonetic.text}] &nbsp;
        <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faVolumeHigh} />
        </a>
      </h3>
    </div>
  );
}
