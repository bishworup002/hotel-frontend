import React, { useState, useEffect, useRef } from 'react';
import { Share, Heart, X, Copy, Mail, MessageCircle, Facebook, Twitter, Code } from 'lucide-react';
import hotelImage from './image/hotel1.jpg'; 

function MainNav({hotel}) {
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const alertRef = useRef(null);

  useEffect(() => {
    const savedState = localStorage.getItem('isSaved') === 'true';
    setIsSaved(savedState);
  }, []);

  const handleSaveToggle = () => {
    setIsSaved(prevState => {
      const newState = !prevState;
      localStorage.setItem('isSaved', newState);
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
    <div className="main-nav">
      <div>
        <h1>{hotel.title}</h1>
      </div>

      <div className="buttons-container">
        <button className="button1 btn-share" onClick={handleShareClick}>
          <Share size={20} />
          Share
        </button>

        <button
          className={`button1 btn-save ${isSaved ? 'active' : ''}`}
          onClick={handleSaveToggle}
        >
          <Heart size={20} fill={isSaved ? 'currentColor' : 'none'} />
          <span style={{ marginBottom: '2px' }}>Save</span>
        </button>
      </div>

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
  );
}

export default MainNav;