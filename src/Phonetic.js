import React, { useState } from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);

  function playAudio() {
    audio.play();
  }

  return (
    <div className="Phonetic">
      <p>
        [{props.phonetic.text}] &nbsp;
        <a href="#" rel="noreferrer" onClick={playAudio}>
          <FontAwesomeIcon icon={faVolumeHigh} />
        </a>
      </p>
    </div>
  );
}
