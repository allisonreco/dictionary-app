import React from "react";
import "./Photos.css"

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <h4>Related pictures to your search...</h4>
        <div>
          {props.photos.map(function (photo, index) {
            return (
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.portrait}
                  key={index}
                  alt={photo.src.photographer}
                  width="205px"
                />
              </a>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
