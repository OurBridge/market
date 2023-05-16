import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Map from '../pages/Map';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
        </Routes>
    )
}

export default Routers