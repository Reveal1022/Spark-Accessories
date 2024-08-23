import { useState, useEffect } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import "./ImageSlider.css";

const ImageSlider = ({ Imageurls }) => {
  const [index, setIndex] = useState(0);
  const [maxWidth380, setMaxWidth380] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth380(window.innerWidth <= 380);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  const nextImg = () => {
    setIndex((index) => {
      if (index === Imageurls.length - (maxWidth380 ? 1 : 2)) return 0;
      return index + 1;
    });
  };

  const prevImg = () => {
    setIndex((index) => {
      if (index === 0) return Imageurls.length - (maxWidth380 ? 1 : 2);
      return index - 1;
    });
  };

  return (
    <>
      <div className="slider">
        <div className="sliderop">
          {Imageurls.map((url, i) => (
            <img
              key={i}
              src={url}
              alt="nothing here"
              className="sliderImages"
              style={{ translate: `${-100 * index}%` }}
            />
          ))}
        </div>

        {/* <div className="buttons">
          <button onClick={nextImg} id="next">
            <IoArrowForwardCircleOutline />
          </button>
          <button onClick={prevImg} id="prev">
            <IoArrowBackCircleOutline />
          </button>
        </div> */}

        <div className="indexBtn">
          {Imageurls.slice(0, maxWidth380 ? Imageurls.length : -1).map(
            (_, i) => (
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
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
