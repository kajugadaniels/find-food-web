import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const PageLayout = () => {
    return (
        <div className='homepage1-body'>
            <div>
                <div class="preloader">
                    <div class="loading-container">
                        <div class="loading"></div>
                        <div id="loading-icon"><img src="https://housebox-html-demo.vercel.app/assets/img/logo/preloader.png" alt="housebox" /></div>
                    </div>
                </div>

                <div class="paginacontainer">
                    <div class="progress-wrap">
                        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                        </svg>
                    </div>
                </div>

                <Header />
                PageLayout
                <Outlet />
            </div>
        </div>
    )
}

export default PageLayout