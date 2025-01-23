export const loadGoogleMapsScript = (callback) => {
    if (typeof window === 'undefined') {
        throw new Error('Window object is not available');
    }

    if (window.google && window.google.maps) {
        // If already loaded, execute callback immediately
        callback();
        return;
    }

    // Create a script tag
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;

    // Set up the callback
    script.onload = () => {
        callback();
    };

    script.onerror = () => {
        console.error('Failed to load Google Maps script');
    };

    // Append the script to the document head
    document.head.appendChild(script);
};
