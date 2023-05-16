import React from "react";
import Navbar from "../organisms/Navbar";
import GeoCode from "../organisms/GeoCode";
import NaverMap from "../organisms/NaverMap";

const Map = () => {
  return (
    <div classNameName="min-h-full">
      <Navbar />
      {/* geoCode */}
      <GeoCode />
      <div className="bg-prigray-100 w-full">
        {/* sidebar */}
        <div className="w-1/4 h-screen absolute z-50 bg-white">
          <div className="h-full border border-gray-200 shadow-md box-border">
            <div className="p-4">
              <input
                type="text"
                id="simple-search"
                class="block w-full p-3 pl-10 text-sm text-gray-900 border 
              border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 
              focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
              dark:focus:border-primary-500"
                placeholder="Search"
                required=""
              />
            </div>
          </div>
        </div>

        <NaverMap/>
      </div>
    </div>
  );
};

export default Map;
