import React from "react";
import "./PlayPause.css";
import play from "../../play.png";
import pause from "../../pause.png";

function PlayPause(props) {
  const { playing,handlePlayPause } = props;
  return (
    <div className="play-pause">
      <img src={playing === false ?play : pause} alt="playPause" onClick={handlePlayPause} />
    </div>
  );
}

export default PlayPause;
