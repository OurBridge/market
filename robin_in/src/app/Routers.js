import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Map from '../pages/Map';
import MapLayout from '../layout/MapLayout';
import Geo from '../pages/Geo';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<MapLayout />}>
                <Route path="/map" element={<Map />} />
                <Route path="/map/:id" element={<Geo />} />
            </Route>
        </Routes>
    )
}

export default Routers