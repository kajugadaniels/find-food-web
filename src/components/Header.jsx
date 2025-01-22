import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="header-area homepage1 header header-sticky d-none d-lg-block " id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-top-area">
                                <ul className="header-content">
                                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                                    </svg> housebox@gmail.com</a> <span> | </span></li>
                                    <li><a href="tel:(234)345-4574"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                                    </svg> (234) 345-4574</a><span> | </span></li>
                                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                                    </svg> (234) 345-4574</a></li>
                                </ul>
                                <ul className="list-content">
                                    <li>
                                        <select name="country" id="country" className="country-area nice-select">
                                            <option value="1" data-display="English">English</option>
                                            <option value="">French</option>
                                        </select>
                                    </li>
                                    <li>
                                        <a href="#" className="signin">
                                            <span> | </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                <path d="M7 1C4.96456 1 3.30859 2.65596 3.30859 4.69141C3.30859 6.72685 4.96456 8.38281 7 8.38281C9.03544 8.38281 10.6914 6.72685 10.6914 4.69141C10.6914 2.65596 9.03544 1 7 1Z" fill="white" />
                                                <path d="M11.5928 10.7944C10.5822 9.76824 9.24243 9.20312 7.82031 9.20312H6.17969C4.75759 9.20312 3.4178 9.76824 2.40718 10.7944C1.4015 11.8155 0.847656 13.1634 0.847656 14.5898C0.847656 14.8164 1.0313 15 1.25781 15H12.7422C12.9687 15 13.1523 14.8164 13.1523 14.5898C13.1523 13.1634 12.5985 11.8155 11.5928 10.7944Z" fill="white" />
                                            </svg>
                                            Sign In
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="header-elements">
                                <div className="site-logo">
                                    <a href="/">
                                        <img src="https://housebox-html-demo.vercel.app/assets/img/logo/logo1.png" alt="housebox" />
                                    </a>
                                </div>
                                <div className="main-menu">
                                    <ul>
                                        <li>
                                            <a href="#" className="plus">Home</a>
                                        </li>
                                        <li>
                                            <a href="#" className="plus">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#" className="plus">Places</a>
                                        </li>
                                        <li>
                                            <a href="#" className="plus">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn-area">
                                    <div className="search-icon header__search header-search-btn">
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                                        </svg>
                                        </a>
                                    </div>
                                    <a href="#" className="theme-btn1">
                                        Get Enquiry
                                        <span className="arrow1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                            </svg>
                                        </span>
                                        <span className="arrow2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header