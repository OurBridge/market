import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_PATH } from "../config/config_home";

const Geo = ({ mapInit }) => {
  const location = useLocation();
  const data = location.state?.data;
  const { naver } = window;
  const navigate = useNavigate();

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
      <div className="w-1/4 h-87/100 absolute z-50 bg-white">
        <div className="h-full border border-gray-200 shadow-md box-border overflow-y-auto">
          <div className="p-4">
            <input
              type="text"
              id="simple-search"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border 
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
                    const uid = item.uid;
                    navigate(`/map/market/${uid}`, { state: { data: item } });
                  }}
                >
                  <div className="flex">
                    <div className="mr-2 w-1/3">
                      <img
                        className="w-full h-full bg-cover rounded-lg"
                        src={`${HOME_PATH}/img/test_img.jpg`}
                        alt="Market"
                      />
                    </div>
                    <div className="w-2/3">
                      <p className="text-prigray-400 text-sm">
                        {item["시도군"]}
                      </p>
                      <p className="font-semibold text-lg">
                        {item["시장정보"]}
                      </p>
                      <div className="text-sm">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-prigray-100 flex justify-center items-center mr-1 rounded-full">
                            <img
                              className="w-4 h-4"
                              src={`${HOME_PATH}/img/location_48.png`}
                            />
                          </div>
                          <span>{item["도로명 주소"]}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-prigray-100 flex justify-center items-center mr-1 rounded-full">
                                <img
                                className="w-4 h-4"
                                src={`${HOME_PATH}/img/schedule_48.png`}
                                />
                            </div>
                            <span>{item["시장유형"]} - {item["시장개설주기"]}</span>
                        </div>
                        {/* <p>{item["취급품목"]}</p> */}
                      </div>
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
