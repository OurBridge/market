import React, { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import { naverSearchData } from "../utils/requestList";
import { geo } from "../json/geo";
import { throttle } from "lodash";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBox = ({ mapInit }) => {
  const { naver } = window;
  const { value, handleChange, handleKeyDown } = useInput("");

  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    setSearchResults([]);
    setSelectedResult(false);

    window.addEventListener("hashchange", handleClick);

    return () => {
      window.removeEventListener("hashchange", handleClick);
    };
  }, [location]);

  const moveToMarket = (item, map) => {
    const geo = item["지리정보"];
    const mapLatLng = new naver.maps.LatLng(
      Number(geo.latitude),
      Number(geo.longitude)
    );

    map.panTo(mapLatLng);
  };

  useEffect(() => {
    const handleSearch = throttle((name) => {
      const searched = geo.filter((item) =>
        item["시장정보"].toLowerCase().includes(name.toLowerCase())
      );
      setSearchResults(searched);
    }, 300);

    handleSearch(value);
  }, [value]);

  const handleEnterKey = async () => {
    if (searchResults.length > 0) {
      const item = searchResults[0];
      setSelectedResult(item);

      moveToMarket(item, mapInit);
      const uid = item.uid;
      const name = item["시장정보"];
      const markerData = await naverSearchData(name);
      navigate(`/map/market/${uid}`, {
        state: { data: item, markerData: markerData },
      });
    }
  };

  return (
    <form className="p-4 flex flex-col">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 
        sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 flex items-center pl-3 
        pointer-events-none"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 pl-10 text-gray-900 border border-gray-300 rounded-lg 
                bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="시장이름 또는 시도군을 검색해보세요!"
          required
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown(handleEnterKey)}
          style={{ flex: "1" }}
        />
      </div>
      {value && (
        <div className="px-4 pt-1 border bg-white z-50 w-full">
          <ul>
            {searchResults.slice(0, 6).map((item) => {
              return (
                <div
                  key={item.id}
                  className={`cursor-pointer ${
                    selectedResult === item ? "bg-gray-200" : ""
                  }`}
                  onClick={async () => {
                    moveToMarket(item, mapInit);
                    setSelectedResult(item);
                    const uid = item.uid;
                    const name = item["시장정보"];
                    const markerData = await naverSearchData(name);
                    navigate(`/map/market/${uid}`, {
                      state: { data: item, markerData: markerData },
                    });
                  }}
                >
                  <p className="my-2">{item["시장정보"]}</p>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </form>
  );
};

export default SearchBox;
