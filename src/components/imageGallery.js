import React, { useState, useEffect } from "react";
import MainNav from "./mainNav";
import hotel1 from "./image/hotel1.jpg";
import hotel2 from "./image/hotel2.jpg";
import hotel3 from "./image/hotel3.jpg";
import hotel4 from "./image/hotel4.jpg";
import hotel5 from "./image/hotel5.jpg";
import hotel6 from "./image/hotel6.jpg";
import hotel7 from "./image/hotel7.jpg";
import hotel8 from "./image/hotel8.jpg";
import hotel9 from "./image/hotel9.jpg";
import hotel10 from "./image/hotel10.jpg";
import hotel11 from "./image/hotel11.jpg";

import showAllIcon from "./image/showAll.png";
import arrow from "./image/arrow.png";
import share from "./image/share.png";
import love from "./image/love.png";


function ImageGallery({hotel}) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isSaved, setIsSaved] = useState(false);
  const images = hotel?.images  ;

  const [modalOpen, setModalOpen] = useState(false);
  console.log("image gallery", images)

  const openModalImage = () => {
    setModalOpen(true);
  };

  const closeModalImage = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Load saved state from localStorage
    const savedState = localStorage.getItem("isSaved") === "true";
    setIsSaved(savedState);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSaveToggle = () => {
    setIsSaved((prevState) => {
      const newState = !prevState;
      localStorage.setItem("isSaved", newState);
      return newState;
    });
  };

  return (
    <div style={{ position: "relative" }}>
      {isSmallScreen && (
        <div className="mobile-image-icon-bar">
          <div>
            <img
              src={arrow}
              alt="Menu"
              className="mobile-image-icon"
            
            />
          </div>

          <div>
            <img
              src={share}
              alt="Share"
              className="mobile-image-icon btn-share-mobile"
            />
            <img
              src={love}
              alt="Save"
              className={`mobile-image-icon btn-save-mobile ${
                isSaved ? "active" : ""
              }`}
              onClick={handleSaveToggle}
            />
          </div>
        </div>
      )}

      {!isSmallScreen && <MainNav hotel={hotel} />}

      <div className="image-gallery">
        <div className="main-image">
          <img src={images[0]} alt="image" />
        </div>

        <div className="small-images">
          <div className="small-image">
            <img src={images[1]} alt="image" />
          </div>
          <div className="small-image">
            <img src={images[2]} alt="image" />
          </div>
          <div className="small-image">
            <img src={images[3]} alt="image" />
          </div>
          <div className="small-image">
            <img src={images[4]} alt="image" />
          </div>
        </div>

       
        <div style={{ position: "relative" }}>
          <button className="show-all" onClick={openModalImage}>
            <img src={showAllIcon} alt="Show All" />
            <span>Show all photos</span>
          </button>
          <ModalImage isOpen={modalOpen} onClose={closeModalImage} images={images} />
        </div>
      </div>

      <div
        style={{
          display: isSmallScreen ? "block" : "none",
          marginBottom: "-3rem",
        }}
      >
        {/* <h1>Comfy New Apt. in Pueblo Libre!</h1> */}
        <h1>{hotel.title}</h1>
      </div>
    </div>
  );
}

export default ImageGallery;


const ModalImage = ({ isOpen, onClose,images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (step) => {
    setCurrentIndex((prevIndex) => (prevIndex + step + images.length) % images.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (event.key === 'ArrowRight') {
      changeImage(1);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`modalImage ${!isOpen ? 'hidden' : ''}`}>
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img
        className="modalImage-content"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <div className="image-count">{`${currentIndex + 1} / ${images.length}`}</div>
      <a
        className={`prev ${currentIndex === 0 ? 'disabled' : ''}`}
        onClick={() => changeImage(-1)}
        aria-disabled={currentIndex === 0}
      >
        &#10094;
      </a>
      <a
        className={`next ${currentIndex === images.length - 1 ? 'disabled' : ''}`}
        onClick={() => changeImage(1)}
        aria-disabled={currentIndex === images.length - 1}
      >
        &#10095;
      </a>
    </div>
  );
};


