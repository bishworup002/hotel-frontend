import React from 'react';

function RightColumn() {
  return (
    <div className="right-column">
      <div className="booking-card">
        <h2>Add dates for prices</h2>
        <div className="date-inputs">
          <div className="date-input">
            <label htmlFor="checkin">Check-in</label>
            <input type="date" id="checkin" name="checkin" />
          </div>
          <div className="date-input">
            <label htmlFor="checkout">Checkout</label>
            <input type="date" id="checkout" name="checkout" />
          </div>
        </div>
        <div className="guests">
          <label htmlFor="guests">Guests</label>
          <select id="guests" name="guests">
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
          </select>
        </div>
        <button className="check-availability">Check availability</button>
        <div className="report">
          <a href="#">🏴 Report this listing</a>
        </div>
      </div>
    </div>
  );
}

export default RightColumn;
