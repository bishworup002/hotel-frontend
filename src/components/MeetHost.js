import React from 'react';
import hostPicture from './image/hostPicture.jpg';
import balloonImage from './image/balloon.png';
import officeBagImage from './image/officeBag.png';
import coHost1 from './image/co-host1.jpg';
import coHost2 from './image/co-host2.jpg';

function MeetHost() {
  return (
    <section className="meet-host">
        <hr style={{ marginTop: '-5rem', marginBottom: '1rem' }} />
      <h2>Meet your Host</h2>
      <div className="host-container">
        <div className="host-details">
          <div className="host-card">
            <div className="host-card-left">
              <img src={hostPicture} alt="Fernando" className="host-image" />
              <h3>Fernando</h3>
              <p className="superhost">Superhost</p>
            </div>

            <div className="host-card-right">
              <b><p>310</p></b>
              <p>Reviews</p>
              <hr />
              <b><p>4.92&#9733;</p></b>
              <p>Rating</p>
              <hr />
              <b><p>7</p></b>
              <p>Year Hosting</p>
            </div>
          </div>

          <div className="host-info">
            <p>
              <img src={balloonImage} alt="Born in the 80s" className="host-info-image" />
              Born in the 80s
            </p>
            <p>
              <img src={officeBagImage} alt="My work: Hospitality" className="host-info-image" />
              My work: Hospitality
            </p>
            <p>
              Hello world! I love traveling and I also love welcoming guests
              in my home country, Peru, meeting new people.
              <br />
              <br />
            </p>
            <a href="#" className="show-more">Show more &gt;</a>
          </div>
        </div>

        <hr className="superHost_hr" />

        <div className="other-info">
          <h3>Fernando is a Superhost</h3>
          <p>
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for guests.
          </p>
          <h3>Co-hosts</h3>
          <div className="co-hosts">
            <img src={coHost1} alt="Percy" />
            <p>Percy</p>
            <img src={coHost2} alt="Roul" />
            <p>Roul</p>
          </div>

          <h3>Hosts details</h3>
          <p>
            Response rate: 100% <br />
            Responds within an hour.
          </p>

          <button className="message-host">Message Host</button>
        </div>
      </div>
    </section>
  );
}

export default MeetHost;
