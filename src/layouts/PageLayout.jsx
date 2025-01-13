import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const PageLayout = () => {
    return (
        <div id="wrapper">
            <div id="pagee" className="clearfix">
                <Header />
                PageLayout
                <Outlet />
            </div>
        </div>
    )
}

export default PageLayout