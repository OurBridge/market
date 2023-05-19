import React from "react";
import SearchBox from "../organisms/SearchBox";

const Map = ({ mapInit }) => {
  return (
    <>
      {/* sidebar */}
      <div className="w-1/4 absolute h-87/100 z-50 bg-white">
        <div className="border h-full border-gray-200 shadow-md box-border">
          <SearchBox mapInit={mapInit} />
        </div>
      </div>
    </>
  );
};

export default Map;
