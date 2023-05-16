import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/main/Home';
import Test from '../components/main/Test';

const Router = ({ mapInit }) => {
    return (
        <Routes>
            <Route path="/" element={<Home mapInit={mapInit} />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    )
}

export default Router