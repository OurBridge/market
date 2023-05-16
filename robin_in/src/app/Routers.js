import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Map from '../pages/Map';
import MapLayout from '../layout/MapLayout';
import Geo from '../pages/Geo';

const Routers = ({ mapInit, saveMapInit }) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<MapLayout saveMapInit={saveMapInit} mapInit={mapInit} />}>
                <Route path="/map" element={<Map />} />
                <Route path="/map/:id" element={<Geo mapInit={mapInit} />} />
            </Route>
        </Routes>
    )
}

export default Routers