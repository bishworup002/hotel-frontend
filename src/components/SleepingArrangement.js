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

     console.log(rooms);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="sleeping-arrangement">
      <h2>Where you'll sleep</h2>
      <div className="room-grid">
        {rooms.slice(0, 4).map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
      {/* {rooms.length > 4 && (
        <div className="scroll-container">
          <div ref={scrollRef} className="scroll-wrapper scrollbar-hide">
            {rooms.slice(4).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      )} */}
    </section>
  );
};

export default SleepingArrangement;
