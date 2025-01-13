import React from 'react'
import PageLayout from './layouts/PageLayout'
import { Route, Routes } from 'react-router-dom'
import { Home, NotFound, Places } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PageLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Places />} />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes