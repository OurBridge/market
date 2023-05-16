import React from "react";
import { geoCode } from "../../json/geoCode";
import GeoCode from "../component/GeoCode";

const GeoCodeContainer = ({ mapInit }) => {
  return (
    <div className="geo_info">
      {geoCode?.map((item, idx) => {
        const name = item.name;
        const lat = item["지리정보"].latitude;
        const lon = item["지리정보"].longitude;

        return <GeoCode key={idx} mapInit={mapInit} item={item} />;
      })}
    </div>
  );
};

export default GeoCodeContainer;
