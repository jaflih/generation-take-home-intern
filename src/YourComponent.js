import React from 'react';
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

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {data.map((record) => (
          <Marker lat={record.Coordinates.lat} lng={record.Coordinates.lng} name={record.Name} address={record.Address} />
        ))}
      </GoogleMapReact>
    </div>
  );
}
