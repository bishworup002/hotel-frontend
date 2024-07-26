import React from 'react';

function ReviewsSection() {
  return (
    <section>
      <div>
        <b>No reviews (yet)</b>
      </div>
      <div className="reviews">
        <span style={{ fontSize: '1.5rem' }}> &#9734; </span>
        <span style={{ paddingTop: '0.5rem' }}>
          This host has 310 reviews for other places to stay.
          <br />
          <a href="#">Show other reviews</a>
        </span>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="location">
      <h2>Where you'll be</h2>
      <p>Lima, Provincia de Lima, Peru</p>
      <div className="map-placeholder">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2178242732994!2d-77.07632762133582!3d-12.097235199999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9cf6b6d3841%3A0x3aa344e9c0300300!2sGolden%20Mar%20Hotel!5e0!3m2!1sen!2sbd!4v1720597183352!5m2!1sen!2sbd"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>
    </section>
  );
}

function ReviewAndLocation() {
  return (
    <div className="ReviewAndLocation">
      <ReviewsSection />
      <hr />
      <LocationSection />
      
    </div>
  );
}

export default ReviewAndLocation;
