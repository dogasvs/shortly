import React from 'react';

const ShortUrlDisplay = ({ shortUrl, longUrl }) => {
  if (!shortUrl) return null; 
  return (
    <div className="shortUrls">
      <div className="long">
        <p>{longUrl}</p>
      </div>
      <div className="shortInfo">
        <p>{shortUrl}</p>
        <button className='btn'>copied</button>
      </div>
    </div>
  );
};

export default ShortUrlDisplay;