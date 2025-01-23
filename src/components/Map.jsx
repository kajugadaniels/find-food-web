import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { loadGoogleMapsScript } from '../utils/loadGoogleMaps'; // Import the utility

const Map = ({ places }) => {
    const mapRef = useRef(null);        // Reference to the map container div
    const googleMapRef = useRef(null);  // Reference to the Google Map instance
    const markersRef = useRef([]);      // Reference to all marker instances

    useEffect(() => {
        // Initialize the map after the script is loaded
        loadGoogleMapsScript(() => {
            if (mapRef.current && !googleMapRef.current) {
                // Initialize the map centered on Kigali
                googleMapRef.current = new window.google.maps.Map(mapRef.current, {
                    center: { lat: -1.9577, lng: 30.1127 }, // Kigali's latitude and longitude
                    zoom: 12,
                });
            }
        });
    }, []);

    useEffect(() => {
        if (googleMapRef.current) {
            // Clear existing markers
            markersRef.current.forEach(marker => marker.setMap(null));
            markersRef.current = [];

            // Add new markers based on the updated places data
            places.forEach(place => {
                if (place.latitude && place.longitude) {
                    const marker = new window.google.maps.Marker({
                        position: { lat: parseFloat(place.latitude), lng: parseFloat(place.longitude) },
                        map: googleMapRef.current,
                        title: place.user_name,
                        // Optional: Customize marker icon
                        // icon: '/path-to-your-custom-icon.png',
                    });

                    // Create an InfoWindow for each marker
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `
                            <div style="max-width: 250px;">
                                <h3>${place.user_name}</h3>
                                <p>${place.address}</p>
                                <a href="/places/${place.user_slug}" class="btn btn-primary">View Details</a>
                            </div>
                        `,
                    });

                    // Add click listener to open InfoWindow
                    marker.addListener('click', () => {
                        infoWindow.open(googleMapRef.current, marker);
                    });

                    // Store the marker instance for future reference
                    markersRef.current.push(marker);
                }
            });

            // Adjust the map bounds to include all markers
            if (places.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                places.forEach(place => {
                    if (place.latitude && place.longitude) {
                        bounds.extend({ lat: parseFloat(place.latitude), lng: parseFloat(place.longitude) });
                    }
                });
                googleMapRef.current.fitBounds(bounds);
            }
        }
    }, [places]);

    return (
        <div
            ref={mapRef}
            style={{ width: '100%', height: '100%' }}
        />
    );
};

Map.propTypes = {
    places: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            user_name: PropTypes.string.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            address: PropTypes.string,
            user_slug: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Map;
