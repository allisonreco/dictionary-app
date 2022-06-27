import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return <img src={photo.src.portrait} key={index} alt="example of search" width="300px"/>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
