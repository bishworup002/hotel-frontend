import React from "react";
import hotel1 from "./image/hotel1.jpg";

function SleepingArrangement({ rooms }) {
  console.log(rooms);
  return (
    <section className="sleeping-arrangement">
      <h2>Where you'll sleep</h2>
      <div className="bedroom-image">
        <img src={hotel1} alt="Bedroom" />
      </div>
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-details">
            <h3>{room.room_title}</h3>
            <p>Bedrooms: {room.bedroom_count}</p>

            <div className="bedroom-image">
              <img
                className="room-image"
                src={room.room_image}
                alt={room.room_title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SleepingArrangement;
