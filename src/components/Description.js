import React from 'react';

function Description({description}) {
  return (
    <section className="description">
      <p>
         {description}
        <br />
        <br />
        <b><a style={{ textDecoration: 'underline' }}>Show more</a> &nbsp; &gt;</b>
      </p>
    </section>
  );
}

export default Description;
