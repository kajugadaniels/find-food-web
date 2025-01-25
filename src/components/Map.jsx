import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Helper function to load the Google Maps script
 * Returns a Promise that resolves when the script is loaded
 */
const loadGoogleMapsScript = (apiKey) => {
    return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCBxR7pEPbJegF-vGjfsyIhnnleD-nmwYo`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            resolve();
        };

        script.onerror = (e) => {
            reject(e);
        };

        document.head.appendChild(script);
    });
};

const Map = ({ places }) => {
    const mapRef = useRef(null); // Reference to the map container div
    const googleMapRef = useRef(null); // Reference to the Google Map instance
    const markersRef = useRef([]); // References to the markers
    const infoWindowRef = useRef(null); // Reference to a single InfoWindow instance

    const [mapLoaded, setMapLoaded] = useState(false); // State to track if the map is loaded

    useEffect(() => {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // Ensure this is set in your .env file

        loadGoogleMapsScript(apiKey)
            .then(() => {
                // Initialize the map
                googleMapRef.current = new window.google.maps.Map(mapRef.current, {
                    center: { lat: -1.9577, lng: 30.1127 }, // Default to Kigali's coordinates
                    zoom: 12,
                });

                // Initialize a single InfoWindow instance
                infoWindowRef.current = new window.google.maps.InfoWindow();

                setMapLoaded(true);
            })
            .catch((error) => {
                console.error('Error loading Google Maps script:', error);
            });

        // Cleanup function to remove markers when component unmounts
        return () => {
            markersRef.current.forEach(marker => marker.setMap(null));
            markersRef.current = [];
        };
    }, []); // Empty dependency array ensures this runs once on mount

    useEffect(() => {
        if (!mapLoaded || !googleMapRef.current) return;

        // Clear existing markers
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];

        // Initialize bounds to fit all markers
        const bounds = new window.google.maps.LatLngBounds();

        // Add new markers
        places.forEach(place => {
            const { latitude, longitude, user_name, address, user_slug, profile_image, user_image } = place;

            if (typeof latitude !== 'number' || typeof longitude !== 'number') {
                console.warn(`Invalid coordinates for place ID ${place.id}`);
                return;
            }

            const position = { lat: latitude, lng: longitude };

            const marker = new window.google.maps.Marker({
                position,
                map: googleMapRef.current,
                title: user_name,
                icon: {
                    url: 'https://static-00.iconduck.com/assets.00/map-marker-icon-342x512-gd1hf1rz.png',
                    scaledSize: new window.google.maps.Size(30, 45), // Adjust the size as needed
                },
            });

            // Add click listener to open InfoWindow
            marker.addListener('click', () => {
                const contentString = `
                    <div style="max-width: 250px;">
                        <h3>${user_name}</h3>
                        <p>${address}</p>
                        <img src="${profile_image || user_image || 'https://via.placeholder.com/150'}" alt="${user_name}" style="width: 100%; height: auto; margin-bottom: 10px;" />
                        <a href="/places/${user_slug}" class="btn btn-primary">View Details</a>
                    </div>
                `;
                infoWindowRef.current.setContent(contentString);
                infoWindowRef.current.open(googleMapRef.current, marker);
            });

            markersRef.current.push(marker);
            bounds.extend(position);
        });

        // Adjust the map to fit all markers
        if (places.length > 0) {
            googleMapRef.current.fitBounds(bounds);
        }

    }, [places, mapLoaded]);

    return (
        <div
            ref={mapRef}
            style={{ width: '100%', height: '100%' }}
            id="googleMap"
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
            profile_image: PropTypes.string,
            user_image: PropTypes.string,
        })
    ).isRequired,
};

export default Map;
