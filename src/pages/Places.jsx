import React, { useEffect, useState } from 'react';
import { SearchFilter } from '../components';
import { fetchPlaces, fetchCategories } from '../api';

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [categories, setCategories] = useState([]);

    // Filter states
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('newest'); // or 'oldest'

    /**
     * Fetch categories on component mount.
     */
    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                // The response likely has shape: { message: "...", data: [...] }
                setCategories(data.data || []);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        getCategories();
    }, []);

    /**
     * Fetch places whenever selectedCategory, searchTerm, or sortOption changes.
     * For demonstration, we apply “sort by” on the front end (after we get data).
     */
    useEffect(() => {
        const getPlaces = async () => {
            try {
                const params = {};
                if (selectedCategory) {
                    // The backend expects 'category' to be a slug
                    params.category = selectedCategory;
                }
                if (searchTerm) {
                    params.search = searchTerm;
                }

                const response = await fetchPlaces(params);
                let fetchedPlaces = response.data || [];

                // Apply sorting on frontend since the backend does not provide a "sort" param.
                // We'll assume each place has a "created_at" field for demonstration.
                fetchedPlaces = fetchedPlaces.sort((a, b) => {
                    const dateA = new Date(a.created_at);
                    const dateB = new Date(b.created_at);
                    return sortOption === 'newest' ? dateB - dateA : dateA - dateB;
                });

                setPlaces(fetchedPlaces);
            } catch (error) {
                console.error('Error fetching places:', error);
            }
        };

        getPlaces();
    }, [selectedCategory, searchTerm, sortOption]);

    return (
        <>
            <div className="hero-inner-section-area grid-area">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/KCC_Wallpaper_by_Mudahunga.jpg"
                    alt="housebox"
                    className="hero-img1"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-header-area text-center">
                                <h1>Good Place to Taste Their Food</h1>
                            </div>
                            <div className="space80"></div>
                        </div>
                    </div>
                </div>
                {/**
         * Pass filter-related state and handlers into SearchFilter
         */}
                <SearchFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                />
            </div>

            <div className="property-inner-section sp2">
                <div className="container">
                    <div className="row">
                        {/* Left Column: Listing */}
                        <div className="col-lg-6">
                            <div className="property-mapgrid-area">
                                <div className="heading1">
                                    <h3>Places ({places.length})</h3>
                                    <div className="tabs-btn">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link active"
                                                    id="pills-home-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-home"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-home"
                                                    aria-selected="true"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z" />
                                                    </svg>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="pills-profile-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-profile"
                                                    aria-selected="false"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" />
                                                    </svg>
                                                </button>
                                            </li>
                                        </ul>
                                        {/* Sort in the front-end; we already have a sort dropdown in SearchFilter. */}
                                    </div>
                                </div>
                                <div className="space32"></div>
                                <div
                                    className="tab-content"
                                    id="pills-tabContent"
                                    style={{ minHeight: '400px' }}
                                >
                                    {/* Grid/List View Tabs */}
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-home"
                                        role="tabpanel"
                                        aria-labelledby="pills-home-tab"
                                        tabIndex="0"
                                    >
                                        <div className="row">
                                            {places.map((place) => (
                                                <div
                                                    className="col-lg-6 col-md-6"
                                                    key={place.id || place.slug}
                                                >
                                                    <div className="property-boxarea">
                                                        <div className="img1">
                                                            {/* In your model, you have place.profile_image, etc. Adjust as needed */}
                                                            <img
                                                                src={
                                                                    place.profile_image
                                                                        ? place.profile_image
                                                                        : 'https://via.placeholder.com/300'
                                                                }
                                                                alt={place.name || 'Place'}
                                                                style={{ width: '100%', height: 'auto' }}
                                                            />
                                                        </div>
                                                        <div className="category-list">
                                                            <ul>
                                                                <li>
                                                                    <span>
                                                                        {place.category?.name || 'No Category'}
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="content-area">
                                                            <h5>{place.name || 'N/A'}</h5>
                                                            <div className="space18"></div>
                                                            <p>{place.address || 'No address provided'}</p>
                                                            <div className="space24"></div>
                                                            <div className="btn-area">
                                                                <a
                                                                    href="#"
                                                                    className="nm-btn"
                                                                    style={{ pointerEvents: 'none' }}
                                                                >
                                                                    View Menu
                                                                </a>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    className="heart"
                                                                    style={{ marginLeft: '8px' }}
                                                                >
                                                                    <img
                                                                        src="https://housebox-html-demo.vercel.app/assets/img/icons/heart1.svg"
                                                                        alt="like"
                                                                        className="heart1"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            {places.length === 0 && (
                                                <div className="col-12">
                                                    <p>No places found.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Right Column: Map */}
                        <div className="col-lg-6">
                            <div className="wrap-right">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.486581183389!2d30.11043537600189!3d-1.9589448367334075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca77ba24b38d7%3A0x3974687218da665c!2sBURGER%20BROS!5e0!3m2!1sen!2srw!4v1737591304552!5m2!1sen!2srw"
                                    width="600"
                                    height="450"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Places;
