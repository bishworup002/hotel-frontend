import React, { useState, useEffect } from 'react';

const ModalImage = ({ isOpen, images, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        changeImage(-1);
      } else if (event.key === 'ArrowRight') {
        changeImage(1);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, index]);

  const changeImage = (step) => {
    const newIndex = (index + step + images.length) % images.length;
    setIndex(newIndex);
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modalImage" onClick={handleClose}>
      <span className="close" onClick={handleClose}>&times;</span>
      <img
        className="modalImage-content"
        src={images[index]}
        alt="Modal Content"
      />
      <div className="image-count">
        {index + 1} / {images.length}
      </div>
      <a className="prev" onClick={() => changeImage(-1)}>&#10094;</a>
      <a className="next" onClick={() => changeImage(1)}>&#10095;</a>
    </div>
  );
};

export default ModalImage;
