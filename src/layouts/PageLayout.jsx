import React from 'react'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
    return (
        <div>
            PageLayout
            <Outlet />
        </div>
    )
}

export default PageLayout