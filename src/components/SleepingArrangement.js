import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RoomCard = ({ room }) => (

  <div className="room-card">
    <img
      src={room.room_image}
      alt={room.room_title}
      className="room-card-image"
    />
    <div className="room-card-content">
      <h3>{room.room_title}</h3>
      <p>Bedrooms: {room.bedroom_count}</p>
    </div>
  </div>
);

const SleepingArrangement = ({ rooms }) => {
  const scrollRef = React.useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="sleeping-arrangement">
      <h2>Where you'll sleep</h2>
      <div className="room-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default SleepingArrangement;
