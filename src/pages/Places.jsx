import React from 'react'
import { SearchFilter } from '../components'

const Places = () => {
    return (
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
    )
}

export default Places