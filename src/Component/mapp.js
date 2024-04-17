import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// Replace 'YOUR_ACCESS_TOKEN' with your actual Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RzLWVuZ2luZWVyIiwiYSI6ImNsdjN2bGR2cTAydWIydHF0ZWMyYTlsbHUifQ.EBjvuJ70JuEXJgjTdDeK1g';

const Mapp = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0], // [lng, lat]
      zoom: 2
    });

    return () => map.remove(); // Clean up map instance on unmount
  }, []); // Empty dependency array ensures this effect only runs once

  return <div ref={mapContainerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default Mapp;
