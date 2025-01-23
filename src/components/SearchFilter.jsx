// src/components/SearchFilter.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const SearchFilter = ({
    categories,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    locationFilters,
    setLocationFilters,
}) => {
    const [locations, setLocations] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch Rwandan locations from the external API
    useEffect(() => {
        const fetchLocations = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://rwanda.p.rapidapi.com/', {
                    headers: {
                        'x-rapidapi-key': '3107e210c4msh320bc0e06280efbp10cd72jsn0a5782a2d4b3',
                        'x-rapidapi-host': 'rwanda.p.rapidapi.com',
                    },
                });
                setLocations(response.data);
                setError(null);
            } catch (error) {
                console.error('Failed to fetch locations', error);
                setError('Failed to load locations');
            } finally {
                setLoading(false);
            }
        };
        fetchLocations();
    }, []);

    // Handler functions for input changes
    const handleLocationChange = (level, value) => {
        setLocationFilters(prev => ({ ...prev, [level]: value }));
    };

    const handleReset = () => {
        setSelectedCategory('');
        setSearchTerm('');
        setSortOption('newest');
        setLocationFilters({});
    };

    return (
        <div className="others-section-area-inner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="theme-btn1 open-search-filter-form">
                            <p className="open-text">Open Search Form {/* SVG omitted for brevity */}</p>
                            <p className="close-text">Close {/* SVG omitted for brevity */}</p>
                        </div>
                        <div className="property-tab-section search-filter-form">
                            <div className="tab-header">
                                <button className="tab-btn active" data-tab="for-sale">Places</button>
                            </div>
                            <div className="tab-content1" id="for-sale">
                                <div className="filters" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    {/* Category Filter */}
                                    <div className="filter-group">
                                        <label>Category</label>
                                        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                                            <option value="">All Categories</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.category_slug}>{cat.category_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* Sorting */}
                                    <div className="filter-group">
                                        <label>Sort By</label>
                                        <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
                                            <option value="newest">Newest</option>
                                            <option value="oldest">Oldest</option>
                                        </select>
                                    </div>
                                    {/* Search Field */}
                                    <div className="filter-group">
                                        <label>Search</label>
                                        <input
                                            type="text"
                                            placeholder="Type keywords..."
                                            value={searchTerm}
                                            onChange={e => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                    {/* Location Filters */}
                                    {/* Dynamic location filters can be rendered based on available data */}
                                    {loading && <p>Loading locations...</p>}
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    {/* Reset Button */}
                                    <div className="filter-group">
                                        <button onClick={handleReset}>Reset Filters</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SearchFilter.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    sortOption: PropTypes.string.isRequired,
    setSortOption: PropTypes.func.isRequired,
    locationFilters: PropTypes.object.isRequired,
    setLocationFilters: PropTypes.func.isRequired,
};

export default SearchFilter;
