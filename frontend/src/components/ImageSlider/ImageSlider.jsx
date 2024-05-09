import { useState } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import "./ImageSlider.css";

const ImageSlider = ({ Imageurls }) => {
  const [index, setIndex] = useState(0);
  const nextImg = () => {
    setIndex((index) => {
      if (index === Imageurls.length - 2) return 0;
      return index + 1;
    });
  };
  const prevImg = () => {
    setIndex((index) => {
      if (index === 0) return Imageurls.length - 2;
      return index - 1;
    });
  };

  return (
    <>
      <div className="slider">
        <div className="sliderop">
          {Imageurls.map((url) => (
            <>
              <img
                key={url}
                src={url}
                alt="nothing here"
                className="sliderImages"
                style={{ translate: `${-100 * index}%` }}
              />
            </>
          ))}
        </div>

        <div className="buttons">
          <button onClick={nextImg} id="next">
            <IoArrowForwardCircleOutline />
          </button>
          <button onClick={prevImg} id="prev">
            <IoArrowBackCircleOutline />
          </button>
        </div>
        <div className="indexBtn">
          {Imageurls.slice(0, -1).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
              }}
              style={{
                backgroundColor: index === i ? "#2d5597" : "white",
              }}
            >
              {}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
