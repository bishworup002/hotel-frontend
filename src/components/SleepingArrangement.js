import React from 'react';
import hotel1 from './image/hotel1.jpg';

function SleepingArrangement() {
  return (
    <section className="sleeping-arrangement">
      <h2>Where you'll sleep</h2>
      <div className="bedroom-image">
        <img src={hotel1} alt="Bedroom" />
      </div>
      <p>Bedroom</p>
      <p>1 queen bed</p>
    </section>
  );
}

export default SleepingArrangement;
