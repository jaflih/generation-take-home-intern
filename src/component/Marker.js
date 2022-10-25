import React from 'react';

const Marker = ({ name, address, index, clickFunction }) => {
  return (
    <div onClick={() => clickFunction(name)}>
      <div className="marker">i</div>
      <div className="marker-info">
        <span>
          <strong>{name}</strong>
        </span>
        <span>{address}</span>
        <span>Add to favorite</span>
      </div>
    </div>
  );
};

export default Marker;
