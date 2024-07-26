import React from 'react';

function Footer() {
  return (
    <footer>
      <section className="things-to-know">
        <h2>Things to know</h2>
        <div className="info-columns">
          <div className="info-column order1">
            <h3>House rules</h3>
            <ul>
              <li>Check-in after 4:00 PM</li>
              <li>Checkout before 11:00 AM</li>
              <li>2 guests maximum</li>
            </ul>
            <a href="#" className="show-more">Show more &gt;</a>
          </div>
          <div className="info-column order2">
            <h3>Safety &amp; property</h3>
            <ul>
              <li>Carbon monoxide alarm not reported</li>
              <li>Smoke alarm not reported</li>
              <li>Not suitable for children and infants</li>
            </ul>
            <a href="#" className="show-more">Show more &gt;</a>
          </div>
          <div className="info-column">
            <h3>Cancellation policy</h3>
            <p>
              Add your trip dates to get the cancellation details for this stay.
            </p>
            <a href="#" className="add-dates">Add dates &gt;</a>
          </div>
        </div>
      </section>

      <section className="location-info">
        <p>Peru &gt; Lima Province &gt; Jesus Maria</p>
      </section>

      <section className="explore-section">
        <h2>Explore other options in and around Lima</h2>
        <div className="options-grid">
          <div className="option-item">
            <div className="option-name">Cieneguilla</div>
            <div className="option-type">Vacation rentals</div>
          </div>
          <div className="option-item">
            <div className="option-name">Punta Hermosa</div>
            <div className="option-type">Vacation rentals</div>
          </div>
          <div className="option-item">
            <div className="option-name">Asia</div>
            <div className="option-type">Vacation rentals</div>
          </div>
          <div className="option-item">
            <div className="option-name">Chacalcayo</div>
            <div className="option-type">Vacation rentals</div>
          </div>
          <div className="option-item">
            <div className="option-name">Barranco</div>
            <div className="option-type">Vacation rentals</div>
          </div>
          <div className="option-item">
            <div className="option-name">Santiago de Surco</div>
            <div className="option-type">Vacation rentals</div>
          </div>
          <div className="option-item">
            <div className="option-name">San Isidro</div>
            <div className="option-type">Vacation rentals</div>
          </div>
          <div className="option-item">
            <div className="option-name">San Miguel</div>
            <div className="option-type">Vacation rentals</div>
          </div>
          <div className="option-item">
            <div className="option-name">Lunahuaná</div>
            <div className="option-type">Vacation rentals</div>
          </div>
        </div>
      </section>

      <section className="other-stays">
        <h2>Other types of stays on Airbnb</h2>
        <ul>
          <li>Jesus Maria vacation rentals</li>
          <li>Jesus Maria monthly stays</li>
          <li>Apartment vacation rentals in Jesus Maria</li>
          <li>Apartment vacation rentals in Lima Province</li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
