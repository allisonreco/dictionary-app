import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <span>
        Coded by{" "}
        <a
          href="https://github.com/allisonreco"
          rel="noreferrer"
          target="_blank"
        >
          Allison Reyes
        </a>
      </span>
      <span>
        <a href="mailto:allisonreyes.dev@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <a
          href="https://www.instagram.com/maisonverde/"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://github.com/allisonreco"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>

        <a
          href="https://www.linkedin.com/in/allison-r-b064a6193/"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </span>
    </div>
  );
}
