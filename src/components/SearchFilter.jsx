import React from 'react';

const SearchFilter = ({
    categories,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
}) => {
    /**
     * Handler for changing the category (slug).
     */
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    /**
     * Handler for changing the sort option ('newest' | 'oldest').
     */
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    /**
     * Handler for search input.
     */
    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="others-section-area-inner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="theme-btn1 open-search-filter-form">
                            <p className="open-text">
                                Open Search Form
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
                                </svg>
                            </p>
                            <p className="close-text">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
                                </svg>
                                Close
                            </p>
                        </div>

                        {/* The actual search filter form */}
                        <div className="property-tab-section search-filter-form">
                            <div className="tab-header">
                                <button className="tab-btn active" data-tab="for-sale">
                                    Places
                                </button>
                            </div>

                            <div className="tab-content1" id="for-sale">
                                <div
                                    className="filters"
                                    style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                                >
                                    {/* Category Filter */}
                                    <div className="filter-group">
                                        <label>Category</label>
                                        <select value={selectedCategory} onChange={handleCategoryChange}>
                                            <option value="">All Categories</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.slug}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Sort Filter */}
                                    <div className="filter-group">
                                        <label>Sort By</label>
                                        <select value={sortOption} onChange={handleSortChange}>
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
                                            onChange={handleSearchInput}
                                            style={{ width: '140px' }}
                                        />
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