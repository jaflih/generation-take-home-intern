import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './component/Marker';
import data from './store_directory.json';

export default function YourComponent() {
  const defaultProps = {
    center: {
      lat: 19.428576,
      lng: -99.119261,
    },
    zoom: 11,
  };

  const [favorites, setfavorites] = useState([]);

  const clickHandler = (i) => {
    setfavorites([...favorites, i]);
  };

  const toggleHandler = (i) => {
    console.log(i);
    //favorites = favorites.splice(i, 1);
    const f = favorites;
    f.pop();
    setfavorites(f);
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {data.map((record, index) => (
          <Marker
            index={index}
            lat={record.Coordinates.lat}
            lng={record.Coordinates.lng}
            name={record.Name}
            address={record.Address}
            clickFunction={clickHandler}
          />
        ))}
      </GoogleMapReact>
      <div className="my-favorites">
        {favorites.map((record, i) => (
          <div onClick={() => toggleHandler(i)}> {record} </div>
        ))}
      </div>
    </div>
  );
}
