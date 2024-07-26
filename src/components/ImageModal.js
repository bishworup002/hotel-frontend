import React, { useState, useEffect } from 'react';

const images = [
  "image/hotel1.jpg", "image/hotel2.jpg", "image/hotel3.jpg", "image/hotel4.jpg", "image/hotel5.jpg",
  "image/hotel6.jpg", "image/hotel7.jpg", "image/hotel8.jpg", "image/hotel9.jpg", "image/hotel10.jpg",
  "image/hotel11.jpg"
];

function ImageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        changeImage(-1);
      } else if (event.key === "ArrowRight") {
        changeImage(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const changeImage = (step) => {
    setCurrentIndex((prevIndex) => (prevIndex + step + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div id="mymodalImage" className="modalImage">
      <span className="close" onClick={closeModal}>&times;</span>
      <img className="modalImage-content" id="modalImageImage" src={images[currentIndex]} alt="Hotel" />
      <div className="image-count" id="imageCount">{`${currentIndex + 1} / ${images.length}`}</div>
      <a className="prev" onClick={() => changeImage(-1)}>&#10094;</a>
      <a className="next" onClick={() => changeImage(1)}>&#10095;</a>
    </div>
  );
}

export default ImageModal;