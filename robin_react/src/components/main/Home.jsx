import React from "react";
import GeoCodeContainer from "../container/GeoCodeContainer";

const Home = ({ mapInit }) => {
  return (
    <>
      <div className="sidebar">
        <input type="text" placeholder="Search" />
        <div className="geo_info">
          <GeoCodeContainer mapInit={mapInit} />
        </div>
      </div>
    </>
  );
};

export default Home;
