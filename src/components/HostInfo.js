import React from 'react';
import hostPicture from './image/hostPicture.jpg';

function HostInfo({host_name,host_image}) {
  return (
    <section className="host-info1">
      <div>
        <img src={host_image} alt="Host" className="host-avatar" />
      </div>
      <div>
        <p>
          <b>Hosted by {host_name}</b> <br />
          Superhost 7 Years Hosting
        </p>
      </div>
    </section>
  );
}

export default HostInfo;
