import React from "react";
import "./ThumbNail.css";

function ThumbNail(props) {
  const { data,handleThumbNail } = props;


  
  return (
    <div id="thumbnails">
      {data.map((image) => {
        return (
          <img
            src={image.largeImageURL}
            alt={image.tags}
            key={image.id}
            width="100px"
            height="100px"
            onClick={() => {
              handleThumbNail(image.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default ThumbNail;
