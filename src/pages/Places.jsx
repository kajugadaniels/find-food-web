import React from 'react'
import { SearchFilter } from '../components'

const Places = () => {
    return (
        <>
            <div className="hero-inner-section-area grid-area">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/KCC_Wallpaper_by_Mudahunga.jpg" alt="housebox" className="hero-img1" />
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

                <SearchFilter />
            </div>

            <div className="property-inner-section sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="property-mapgrid-area">
                                <div className="heading1">
                                    <h3>Properties (58)</h3>
                                    <div className="tabs-btn">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z"></path>
                                                    </svg>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path>
                                                    </svg>
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="filter-group">
                                            <select>
                                                <option>Sort by (Default)</option>
                                                <option>Oldest</option>
                                                <option>Newest</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="space32"></div>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="property-boxarea">
                                                    <div className="img1">
                                                        <div className="swiper swiper-fade">
                                                            <div className="swiper-wrapper">
                                                                <div className="swiper-slide">
                                                                    <img src="https://housebox-html-demo.vercel.app/assets/img/all-images/properties/property-img2.png" alt="housebox" />
                                                                </div>
                                                            </div>
                                                            <div className="swiper-pagination"></div>
                                                        </div>
                                                    </div>
                                                    <div className="category-list">
                                                        <ul>
                                                            <li><a href="#">Featured</a></li>
                                                            <li><a href="#">For Rent</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-area">
                                                        <a href="#">Apartment Complex</a>
                                                        <div className="space18"></div>
                                                        <p>Los Angeles City, CA, USA</p>
                                                        <div className="space24"></div>
                                                        <div className="btn-area">
                                                            <a href="#" class="nm-btn">View Menu</a>
                                                            <a href="javascript:void(0)" className="heart">
                                                                <img src="https://housebox-html-demo.vercel.app/assets/img/icons/heart1.svg" alt="housebox" className="heart1" />
                                                                <img src="https://housebox-html-demo.vercel.app/assets/img/icons/heart2.svg" alt="housebox" className="heart2" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wrap-right">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Places