import React, { useState, useEffect, useRef } from 'react';
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
import { Share, Heart, X, Copy, Mail, MessageCircle, Facebook, Twitter, Code } from 'lucide-react';
import showAllIcon from "./image/showAll.png";
import arrow from "./image/arrow.png";
import share from "./image/share.png";
import love from "./image/love.png";


function ImageGallery({hotel}) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const alertRef = useRef(null);
  const images = hotel?.images  ;

  const [modalOpen, setModalOpen] = useState(false);
  // console.log("image gallery", images)

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

  const handleShareClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  const handleCopyLinkClick = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setIsAlertVisible(true);
        setTimeout(() => {
          setIsAlertVisible(false);
        }, 1000);
      })
      .catch((err) => console.error('Failed to copy: ', err));
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
              onClick={handleShareClick}
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
          {/* share modal */}
          {isModalOpen && (
        <div id="shareModal" className="shareModal">
          <div className="shareModal-content">
            <div className="shareModal-header">
              <h2>Share this place</h2>
            </div>
            <span className="close" onClick={handleCloseClick}>
              <X size={24} />
            </span>

            <div className="shareModal-body">
              <div className="place-info">
                <img src={hotel.images[0]} alt="Apartment" />
                <p>{hotel.address} · ★New · 1 bedroom · {hotel.bedroom_count} beds · {hotel.bathroom_count} baths</p>
              </div>
              <div className="share-options">
                <div className="share-option" onClick={handleCopyLinkClick}>
                  <Copy size={24} />
                  <p>Copy Link</p>
                </div>
                {isAlertVisible && (
                  <div id="alert" ref={alertRef} className="alert">
                    <span style={{ color: 'rgb(253, 255, 253)', backgroundColor: 'rgb(6, 153, 6)', borderRadius: '100% 24px' }}>&#x2713;</span>
                    Link copied!
                  </div>
                )}
                <div className="share-option">
                  <Mail size={24} />
                  <p>Email</p>
                </div>
                <div className="share-option">
                  <MessageCircle size={24} />
                  <p>Messages</p>
                </div>
                <div className="share-option">
                  <MessageCircle size={24} />
                  <p>Messenger</p>
                </div>
                <div className="share-option">
                  <Facebook size={24} />
                  <p>Facebook</p>
                </div>
                <div className="share-option">
                  <Twitter size={24} />
                  <p>Twitter</p>
                </div>
                <div className="share-option">
                  <Code size={24} />
                  <p>Embed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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