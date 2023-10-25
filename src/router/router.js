import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../component/Layout';
import Home from '../pages/Home/index'
import About from '../pages/About/index'

const router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    )
}

export default router