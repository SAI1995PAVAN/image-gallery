import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

import ThumbNail from "./Components/ThumNail/ThumbNail";
import ImageBlock from "./Components/Image-Block/ImageBlock";
import PlayPause from "./Components/PlayPause/PlayPause";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let search = "animals";
    try {
      axios
        .get(
          `https://pixabay.com/api/?key=29641434-f1dd5d6d2cae44648af6bbfff&q=${search}&image_type=photo&pretty=true`
        )
        .then((res) => {
          setData(res.data.hits);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleNext = useCallback(() => {
    index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
  }, [data, index]);

  const handlePrevious = () => {
    index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
  };

  const handleThumbNail = (id) => {
    let selected = data.map((image) => {
      return image.id;
    });
    let indexValue = selected.indexOf(id);

    setIndex(indexValue);
  };

  const handlePlayPause = () => {
    playing === false ? setPlaying(true) : setPlaying(false);
  };

  useEffect(() => {
    let interval;
    if (playing === true) {
      console.log(index);
      interval = setInterval(handleNext, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [playing, index, handleNext]);

  return (
    <div className="App">
      <div>
        <h1 className="heading">Image Slider</h1>

        <ThumbNail
          data={data}
          currentIndex={index}
          handleThumbNail={handleThumbNail}
        />
        <ImageBlock
          data={data}
          index={index}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
        <PlayPause playing={playing} handlePlayPause={handlePlayPause} />
      </div>
    </div>
  );
}

export default App;
