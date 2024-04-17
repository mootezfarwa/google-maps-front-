import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
 
const Map = ({ country }) => {
    const [position, setPosition] = useState(null);
 
    useEffect(() => {
        if (country) {
            // Fetch coordinates for the given country
            fetch(`https://nominatim.openstreetmap.org/search?q=${country}&format=json&limit=1`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.length > 0) {
                        // Extract lat and lon
                        const { lat, lon } = data[0];
                        setPosition([lat, lon]);
                    }
                })
                .catch((error) => {
                    console.error('Failed to fetch country coordinates:', error);
                    setPosition(null);
                });
        } else {
            setPosition(null); // Reset position if country is not provided
        }
    }, [country]);
 
    // Set default center and zoom level
    const defaultCenter = [0, 0];
    const defaultZoom = 2;
 
    return (
        <div>
            {/* Product search input */}
            <div className="input-container">
                <input
                    type="text"
                    className="custom-input" // Custom CSS class for styling
                    placeholder="Search for a product" // Placeholder text
                    aria-label="Product search input"
                    // Handle the change of the input as needed
                />
                <span className="input-icon">🔍</span> {/* Search icon */}
            </div>
 
            {/* MapContainer with conditionally set center */}
            <MapContainer center={position || defaultCenter} zoom={position ? 6 : defaultZoom} style={{ height: '100vh', width: '100vw' }}>
                {/* TileLayer for map tiles */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
 
                {/* Marker for the given position */}
                {position && <Marker position={position} />}
            </MapContainer>
        </div>
    );
};
 
export default Map;