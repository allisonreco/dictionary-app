import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos?.length > 0) {
    return (
      <div className="Photos">
        <h4>Related pictures to your search...</h4>
        <div>
          {props.photos.map(function (photo, index) {
            return (
              <div key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.portrait}
                    title={photo.alt}
                    alt={photo.alt}
                    width="205px"
                    height="300px"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
