import React, { useMemo, useCallback } from 'react';
import {
    GoogleMap,
    Marker,
    InfoWindow,
    useLoadScript
} from '@react-google-maps/api';
import PropTypes from 'prop-types';

const mapContainerStyle = {
    width: '100%',
    height: '100%',
};

const defaultCenter = {
    lat: -1.9577,
    lng: 30.1127,
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

const Map = ({ places }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });

    const [selectedPlace, setSelectedPlace] = React.useState(null);

    const handleMarkerClick = useCallback((place) => {
        setSelectedPlace(place);
    }, []);

    const handleMapClick = () => {
        setSelectedPlace(null);
    };

    // Calculate map bounds based on places
    const center = useMemo(() => {
        if (places.length === 0) return defaultCenter;

        const latSum = places.reduce((sum, place) => sum + place.latitude, 0);
        const lngSum = places.reduce((sum, place) => sum + place.longitude, 0);
        return {
            lat: latSum / places.length,
            lng: lngSum / places.length,
        };
    }, [places]);

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading Maps...</div>;

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
            options={options}
            onClick={handleMapClick}
        >
            {places.map((place) => (
                <Marker
                    key={place.id}
                    position={{ lat: place.latitude, lng: place.longitude }}
                    onClick={() => handleMarkerClick(place)}
                    label={{
                        text: place.user_name,
                        fontSize: '12px',
                        fontWeight: 'bold',
                    }}
                />
            ))}

            {selectedPlace && (
                <InfoWindow
                    position={{ lat: selectedPlace.latitude, lng: selectedPlace.longitude }}
                    onCloseClick={() => setSelectedPlace(null)}
                >
                    <div>
                        <h3>{selectedPlace.user_name}</h3>
                        <p>{selectedPlace.address}</p>
                        <a href={`/places/${selectedPlace.user_slug}`}>View Details</a>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
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

export default Map