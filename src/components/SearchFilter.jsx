import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    resetFilters
}) => {
    const [locations, setLocations] = useState({});

    // Fetch Rwandan locations from the external API
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://rwanda.p.rapidapi.com/', {
                    headers: {
                        'x-rapidapi-key': '3107e210c4msh320bc0e06280efbp10cd72jsn0a5782a2d4b3'
                    }
                });
                setLocations(response.data);
            } catch (error) {
                console.error('Failed to fetch locations', error);
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
                                <div className="filters" style={{ display: 'flex', gap: '1rem' }}>
                                    {/* Category Filter */}
                                    <div className="filter-group">
                                        <label>Category</label>
                                        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                                            <option value="">All Categories</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.slug}>{cat.name}</option>
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

export default SearchFilter;
