import React from "react";
import SearchBox from "../organisms/SearchBox";

const Map = ({ mapInit }) => {
  return (
    <>
      {/* sidebar */}
      <div className="md:w-1/4 w-full absolute h-87/100 bg-white the_second">
        <div className="border h-full border-gray-200 shadow-md box-border">
          <SearchBox mapInit={mapInit} />
        </div>
      </div>
    </>
  );
};

export default Map;
