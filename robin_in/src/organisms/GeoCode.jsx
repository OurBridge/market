import React from "react";
import { geoCode } from "../json/geoCode";
import { Link } from "react-router-dom";

const GeoCode = () => {
  return (
    <div className="border-prigray-300 border-b">
      <div className="mx-28 p-3">
        {geoCode?.map((geo, idx) => (
          <Link key={idx} to={`/map/${geo.code}`}>
            <span
              className="m-2 border border-prigray-600 rounded-full
               px-2.5 py-1 text-prigray-600 shadow-md"
            >
              {geo.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GeoCode;
