import React, { useState } from 'react';
import closeIcon from './image/x.png';


function AppBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const hideAppBanner = () => {
    setIsVisible(false);
    // You might want to update the margin of MobileImage component here
  };

  if (!isVisible) return null;

  return (
    <div id="app-banner">
     <img
  src={closeIcon}
  alt="Menu"
  id="get-app"
  className="mobile-image-icon"
  onClick={hideAppBanner}
/>

      <div className="app-icon"><div className="app-icon-inner"></div></div>
      <div className="app-text">
        <div><strong>Get the app</strong></div>
        <div>The fastest, easiest way</div>
      </div>
      <button className="use-app-button">USE APP</button>
    </div>
  );
}

export default AppBanner;