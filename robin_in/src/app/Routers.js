import React from "react";
import { Routes, Route } from "react-router-dom";
import MapLayout from "../layout/MapLayout";
import Home from "../pages/Home";
import Map from "../pages/Map";
import Geo from "../pages/Geo";
import Market from "../pages/Market";

const Routers = ({ mapInit, saveMapInit }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        element={<MapLayout saveMapInit={saveMapInit} mapInit={mapInit} />}
      >
        <Route path="/map" element={<Map mapInit={mapInit} />} />
        <Route path="/map/:id" element={<Geo mapInit={mapInit} />} />
        <Route path="/map/market/:id" element={<Market mapInit={mapInit} />} />
      </Route>
    </Routes>
  );
};

export default Routers;
