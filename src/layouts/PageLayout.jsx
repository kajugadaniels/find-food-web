import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const PageLayout = () => {
    return (
        <div className='homepage1-body'>
            <div>
                <div className="preloader">
                    <div className="loading-container">
                        <div className="loading"></div>
                        <div id="loading-icon"><img src="https://housebox-html-demo.vercel.app/assets/img/logo/preloader.png" alt="housebox" /></div>
                    </div>
                </div>

                <div className="paginacontainer">
                    <div className="progress-wrap">
                        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                        </svg>
                    </div>
                </div>

                <Header />

                <Outlet />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div className="cta1-section-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cta-bg-area" style={{ backgroundImage: "url('https://housebox-html-demo.vercel.app/assets/img/all-images/bg/cta-bg1.png')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-5">
                                            <div className="cta-header">
                                                <h2 className="text-anime-style-3">Step Into Your Dream Home with HouseBox</h2>
                                                <div className="space16"></div>
                                                <p data-aos="fade-left" data-aos-duration="1000">At HouseBox, we believe your next home is more than just a place – it’s where your future begins you’re buy.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-5" data-aos="zoom-in" data-aos-duration="1000">
                                            <div className="btn-area1 text-center">
                                                <a href="property-halfmap-grid.html" className="theme-btn1">Find Your Dream Home <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                                    <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                                </svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                                    <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                                </svg></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default PageLayout