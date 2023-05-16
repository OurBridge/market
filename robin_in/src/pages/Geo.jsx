import React from "react";
import { useLocation } from "react-router-dom";
import { HOME_PATH } from "../config/config_home";

const Geo = ({ mapInit }) => {
  const location = useLocation();
  const data = location.state.data;
  const { naver } = window;

  // 마커 이동
  const moveToMarket = (item, map) => {
    const geo = item["지리정보"];
    const mapLatLng = new naver.maps.LatLng(
      Number(geo.latitude),
      Number(geo.longitude)
    );

    map.panTo(mapLatLng);
  };

  return (
    <>
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
            <div>
              {data?.map((item) => (
                <div
                  key={item.uid}
                  className="border border-prigray-200 rounded-lg p-3 my-4 cursor-pointer"
                  onClick={() => {
                    moveToMarket(item, mapInit);
                  }}
                >
                  <div className="flex">
                    <div className="mr-2 w-1/3">
                      <img
                        className="w-full h-full bg-cover rounded-lg"
                        src={`${HOME_PATH}/img/test_img.jpg`}
                      />
                    </div>

                    {/* right */}
                    <div className="w-2/3">
                      <p>{item["시도군"]}</p>
                      <p>{item["시장정보"]}</p>
                      <div className="text-sm">
                        <p>{item["도로명 주소"]}</p>
                        <p>{item["시장유형"]}</p>
                        <p>{item["시장개설주기"]}</p>
                        <p>{item["취급품목"]}</p>
                      </div>
                      <p></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Geo;
