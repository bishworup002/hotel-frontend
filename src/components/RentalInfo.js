import React from 'react';

function RentalInfo({address,bathroom_count, bedroom_count,guest_count}) {
  return (
    <section className="rental-info">
      <h3>{address}</h3>
      <p>{guest_count} guests • {bedroom_count} bedrooms •  1 bed • {bathroom_count} baths</p>
      <b><p>&#9733; New</p></b>
    </section>
  );
}

export default RentalInfo;
