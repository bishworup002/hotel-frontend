import React from 'react';
import door from './image/door.png';
import superHost from './image/superHost.png';

function CheckInInfo() {
  return (
    <section className="checkIn">
      <div className="checkInInner">
        <img src={door} alt="Self check-in" />
        <p>
          <b>Self check-in</b> <br />
          Check yourself in with the smartlock
        </p>
      </div>
      <div className="checkInInner">
        <img src={superHost} alt="Superhost" />
        <p>
          <b>Fernando is a Superhost</b> <br />
          Superhosts are experienced, highly rated Hosts
        </p>
      </div>
    </section>
  );
}

export default CheckInInfo;
