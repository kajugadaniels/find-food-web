import React from 'react'
import PageLayout from './layouts/PageLayout'
import { Route, Routes } from 'react-router-dom'
import { Home, NotFound } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PageLayout />}>
                <Route path="/" element={<Home />} />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes