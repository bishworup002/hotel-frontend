import React, { useState, useEffect ,useRef} from 'react';
import shareIcon from './image/share.png'; 
import loveIcon from './image/love.png'; 
import hotelImage from './image/hotel1.jpg'; 

function MainNav() {
  const [isSaved, setIsSaved] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const alertRef = useRef(null);

  // Load saved state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('isSaved') === 'true';
    setIsSaved(savedState);
  }, []);

  // Toggle save state and update localStorage
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
        }, 1000); // Display alert for 1 second
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };

  return (
    <div className="main-nav">
      <div>
        <h1>Comfy New Apt. in Pueblo Libre!</h1>
      </div>

      <div className="buttons-container">
        <button className="button1 btn-share" onClick={handleShareClick}>
          <img src={shareIcon} alt="Share" className="icon" />
          Share
        </button>

        <button
          className={`button1 btn-save ${isSaved ? 'active' : ''}`}
          onClick={handleSaveToggle}
        >
          <img src={loveIcon} alt="Save" className="icon" />
          <span style={{ marginBottom: '2px' }}>Save</span>
        </button>
      </div>

      {isModalOpen && (
        // onClick={handleWindowClick}
        <div id="shareModal" className="shareModal" >
          <div className="shareModal-content">
            <div className="shareModal-header">
              <h2>Share this place</h2>
            </div>
            <span className="close" onClick={handleCloseClick}>&times;</span>

            <div className="shareModal-body">
              <div className="place-info">
                <img src={hotelImage} alt="Apartment" />
                <p>Rental unit in Lima · ★New · 1 bedroom · 1 bed · 1 bath</p>
              </div>
              <div className="share-options">
                <div className="share-option" onClick={handleCopyLinkClick}>
                  <p>Copy Link</p>
                </div>
                {isAlertVisible && (
                  <div id="alert" ref={alertRef} className="alert">
                    <span style={{ color: 'rgb(253, 255, 253)', backgroundColor: 'rgb(6, 153, 6)', borderRadius: '100% 24px' }}>&#x2713;</span>
                    Link copied!
                  </div>
                )}
                <div className="share-option">
                  <p>Email</p>
                </div>
                <div className="share-option">
                  <p>Messages</p>
                </div>
                <div className="share-option">
                  <p>Messenger</p>
                </div>
                <div className="share-option">
                  <p>Facebook</p>
                </div>
                <div className="share-option">
                  <p>Twitter</p>
                </div>
                <div className="share-option">
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
