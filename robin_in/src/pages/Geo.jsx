import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_PATH } from "../config/config_home";
import { naverSearchData, getCommentData } from "../utils/requestList";
import SearchBox from "../organisms/SearchBox";

const Geo = ({ mapInit }) => {
  const location = useLocation();
  const data = location.state?.data;
  const navigate = useNavigate();
  const { naver } = window;

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
      <div className="md:w-1/4 w-full absolute h-87/100 bg-white the_second">
        <div className="h-full border border-gray-200 shadow-md box-border overflow-y-auto">
          <div>
            <SearchBox mapInit={mapInit} />
            <div className="p-4 pt-0">
              {data?.map((item) => (
                <div
                  key={item.uid}
                  className="border border-prigray-200 rounded-lg p-3 my-4 mt-0 cursor-pointer"
                  onClick={async () => {
                    moveToMarket(item, mapInit);
                    const uid = item.uid;
                    const name = item["시장정보"];
                    const markerData = await naverSearchData(name);
                    const commentData = await getCommentData(name);
                    navigate(`/map/market/${uid}`, {
                      state: { data: item, markerData: markerData, commentData: commentData },
                    });
                  }}
                >
                  <div className="flex">
                    <div className="mr-2 md:w-1/3 w-1/2">
                      <img
                        className="w-full h-full bg-cover rounded-lg"
                        src={`${HOME_PATH}/img/test_img.jpg`}
                        alt="Market"
                      />
                    </div>
                    <div className="w-2/3">
                      <p className="text-prigray-400 md:text-sm text-xs">
                        {item["시도군"]}
                      </p>
                      <p className="font-semibold md:text-lg">
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
                          <span>
                            {item["시장유형"]} - {item["시장개설주기"]}
                          </span>
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
