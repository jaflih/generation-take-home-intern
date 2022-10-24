import React from 'react';

const Marker = ({ name, address }) => {
  return (
    <div>
      <div className="marker">i</div>
      <div className="marker-info">
        <span>
          <strong>{name}</strong>
        </span>
        <span>{address}</span>
      </div>
    </div>
  );
};

export default Marker;
