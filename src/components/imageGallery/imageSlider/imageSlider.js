import React, { useState, useEffect } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ImageSlider = ({ images, selectedImage }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedIndex = images.findIndex(
      (image) => image.id === selectedImage.id
    );
    setIndex(selectedIndex);
  }, [images, selectedImage]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (e.key === "ArrowRight") {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div tabIndex="0" onKeyDown={handleKeyDown}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <img
              className="d-block w-100"
              src={image.fullSize}
              alt={image.title}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
