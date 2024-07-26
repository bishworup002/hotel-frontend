import React from 'react';
import hostPicture from './image/hostPicture.jpg';

function HostInfo() {
  return (
    <section className="host-info1">
      <div>
        <img src={hostPicture} alt="Host" className="host-avatar" />
      </div>
      <div>
        <p>
          <b>Hosted by Fernando</b> <br />
          Superhost 7 Years Hosting
        </p>
      </div>
    </section>
  );
}

export default HostInfo;
