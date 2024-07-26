import React from 'react';


const RoomCard = ({ room }) => (
  <div className="room-card">
    <img className="room-image" src={room.room_image} alt={room.room_title} />
    <div className="room-details">
      <h3>{room.room_title}</h3>
      <p>Bedrooms: {room.bedroom_count}</p>
    </div>
  </div>
);

export default RoomCard;
