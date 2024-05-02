import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibW9vdGV6ZmFyd2EiLCJhIjoiY2x1Z3BoaTFqMW9hdjJpcGdibnN1djB5cyJ9.It7emRJnE-Ee59ysZKBOJw';

const Map = ({ selectedRdLocation }) => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [0, 0], // Default center
            zoom: 4 // Default zoom
        });

        mapRef.current = map;

        // Add navigation controls
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        return () => map.remove(); // Clean up map instance on unmount
    }, []);

    useEffect(() => {
      if (selectedRdLocation) {
          fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(selectedRdLocation)}.json?access_token=${mapboxgl.accessToken}`)
              .then(response => response.json())
              .then(data => {
                  const coordinates = data.features[0].center;
          
                  // Add marker for the selected R&D location
                  const marker = new mapboxgl.Marker()
                      .setLngLat(coordinates)
                      .addTo(mapRef.current);
                  markerRef.current = marker;
                  // Set map center and zoom to the selected R&D location
                  mapRef.current.setCenter(coordinates);
                  mapRef.current.setZoom(10); // Adjust zoom level as needed
              })
              .catch(error => {
                  console.error('Error geocoding selected location:', error);
              });
      } else {
          // Remove existing marker if selectedRdLocation is null or undefined
          if (markerRef.current) {
              markerRef.current.remove();
          }
      }
  }, [selectedRdLocation]);
  

    return <div ref={mapContainerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default Map;
