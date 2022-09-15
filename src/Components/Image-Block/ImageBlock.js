import React from "react";
import back from "../../back.png";
import next from "../../next.png";
import "./ImageBlock.css";


function ImageBlock(props) {
  const { data, index, handleNext, handlePrevious } = props;
  return data.length > 0 ?
    <div className="image-display">
      <img
        src={back}
        alt="back"
        className="next-back"
        onClick={handlePrevious}
        id='back'
      />

      <img
        src={data[index].largeImageURL}
        alt={data[index].tags}
        key={data[index].id}
        width='500px'
        height='400px'
        id="main-image"
        
      />

      <img src={next} alt="next" className="next-back" onClick={handleNext} id='next' />
    </div> : <div></div>;
  
}

export default ImageBlock;
