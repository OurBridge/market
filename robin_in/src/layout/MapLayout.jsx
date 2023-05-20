import React, { useEffect, useRef, useState } from "react";
import Navbar from "../organisms/Navbar";
import GeoCode from "../organisms/GeoCode";
import NaverMap from "../organisms/NaverMap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { geo } from "../json/geo";
import {
  generateClickedMarkerHtml,
  generateMarkerHtml,
  generateMyPositionMarkerHtml,
} from "../utils/requestHtml";
import { geoCode } from "../json/geoCode";
import { HOME_PATH } from "../config/config_home";
import { naverSearchData } from "../utils/requestList";
import { MarkerClustering } from "../MarkerClustering";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

const MapLayout = ({ mapInit, saveMapInit, myLocation }) => {
  const mapElement = useRef(null);
  const navigate = useNavigate();
  let selectedMarker = null; // 선택한 마커 상태를 저장하는 변수

  const { naver } = window;

  // 마커 이동
  const moveToMarket = (item, map) => {
    const geo = item?.["지리정보"];
    const mapLatLng = new naver.maps.LatLng(
      Number(geo.latitude),
      Number(geo.longitude)
    );

    map.panTo(mapLatLng);
  };
  // 마커 클릭 이벤트 핸들러 함수
  const markerClickEvent = (marker, infowindow, item, map) => {
    naver.maps.Event.addListener(marker, "click", async () => {
      const uid = item.uid;
      const name = item["시장정보"];
      // map.setZoom(16);

      // (1) 이동 이벤트
      moveToMarket(item, map);

      // 말풍선 추가
      // if (infowindow.getMap()) {
      //   infowindow.close();
      // } else {
      //   infowindow.open(map, marker);
      // }

      // 선택한 마커가 이미 선택되어 있는 경우 클릭 해제 처리
      if (selectedMarker === marker) {
        marker.setIcon({
          content: generateMarkerHtml(name),
          size: new naver.maps.Size(10, 10),
        });

        selectedMarker = null; // 선택한 마커 상태 초기화
      } else {
        // 선택한 마커가 없거나 다른 마커를 선택한 경우
        if (selectedMarker) {
          selectedMarker.setIcon({
            content: generateMarkerHtml(name),
            size: new naver.maps.Size(10, 10),
          });
        }

        // (2) 마커 변경
        marker.setIcon({
          content: generateClickedMarkerHtml(name),
          size: new naver.maps.Size(10, 10),
        });

        selectedMarker = marker; // 선택한 마커 설정
      }

      marker.name = name; // 선택한 마커의 이름을 설정합니다.

      // (3) 마커 데이터 가져오기
      const markerData = await naverSearchData(name);

      // (4) url 이동
      navigate(`/map/market/${uid}`, {
        state: { data: item, markerData: markerData },
      });
    });
  };

  useEffect(() => {
    const initializeMap = async () => {
      if (!mapElement.current || !naver) return;

      const location = new naver.maps.LatLng(
        myLocation?.latitude,
        myLocation?.longitude
      );

      const mapOptions = {
        center: location,
        zoom: 17,
        zoomControl: true,
        mapTypeControl: true,
        mapDataControl: false,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
          style: naver.maps.ZoomControlStyle.SMALL,
        },
      };

      const map = new naver.maps.Map(mapElement.current, mapOptions);
      saveMapInit(map);

      // Custom control
      const locationBtnHtml = `<button type="button" class="bg-white p-1.5 border border-black">
        <img class="h-5" src="${HOME_PATH}/img/compass.png"/>
      </button>`;
      naver.maps.Event.once(map, "init", function () {
        const customControl = new naver.maps.CustomControl(locationBtnHtml, {
          position: naver.maps.Position.TOP_RIGHT,
        });

        customControl.setMap(map);

        // Get current location
        naver.maps.Event.addDOMListener(
          customControl.getElement(),
          "click",
          function () {
            map.panTo(
              new naver.maps.LatLng(myLocation?.latitude, myLocation?.longitude)
            );
          }
        );
      });
      let markers = [];
      // Display markers
      geo?.forEach((item) => {
        const geo = item["지리정보"];
        const name = item["시장정보"];
        const address = item["도로명 주소"];

        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(geo.latitude, geo.longitude),
          map: map,
          icon: {
            content: generateMarkerHtml(name),
            size: new naver.maps.Size(10, 10),
          },
        });

        markers.push(marker);

        const contentString = `
        <div class="p-2">
        <p class="font-semibold">${name}</p>
        <p class="text-sm">${address}</p>
      </div>`;

        const infowindow = new naver.maps.InfoWindow({
          content: contentString,
          disableAnchor: true,
          anchorSkew: false,
          borderColor: "#0074FF",
          maxWidth: 200,
          backgroundColor: "#FFF",
          zIndex: 99,
          pixelOffset: new naver.maps.Point(20, -10),
          // anchorSize: new naver.maps.Size(30, 30),
        });

        markerClickEvent(marker, infowindow, item, map);

        naver.maps.Event.addListener(marker, "mouseover", () => {
          // 말풍선 추가
          if (infowindow.getMap()) {
            infowindow.close();
          } else {
            infowindow.open(map, marker);
          }
        });
      });

      const clustererOptions = {
        maxZoom: 13,
        gridSize: 100, // 클러스터 크기
        minClusterSize: 3, // 최소 마커 개수
        disableClickZoom: false, // 클릭 시 줌 동작 여부
        indexGenerator: [],
        stylingFunction: (clusterMarker, clusterCount) => {
          const content = `<div class="relative">
          <img
            src="${HOME_PATH}/img/myposition.png"
          />
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">${clusterCount}</div>
        </div>`;
          clusterMarker.setIcon({
            content: content,
            size: new naver.maps.Size(50, 50),
            anchor: new naver.maps.Point(25, 25), // Adjust the anchor point if needed
          });
        },
      };

      const clusterer = new MarkerClustering({
        map: map,
        markers: markers,
        ...clustererOptions,
      });

      // My Position Marker
      // const myPositionMarket = new naver.maps.Marker({
      //   position: new naver.maps.LatLng(
      //     myPosition.latitude,
      //     myPosition.longitude
      //   ),
      //   map: map,
      //   icon: {
      //     content: generateMyPositionMarkerHtml(),
      //     size: new naver.maps.Size(10, 10),
      //   },
      // });
    };

    initializeMap();
  }, [myLocation]);

  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="border-prigray-300 border-b h-6/100 web-only">
        <div className="md:mx-28 md:p-3.5 flex flex-col md:flex-row items-center justify-center flex-wrap">
          {chunkArray(geoCode, 5).map((group, groupIdx) => (
            <div key={groupIdx} className="flex">
              {group.map((item, itemIdx) => {
                const data = geo.filter((i) => i["시도군"] === item.name);
                return (
                  <Link
                    key={itemIdx}
                    to={`/map/${item.code}`}
                    state={{ data: data }}
                    onClick={() => {
                      moveToMarket(item, mapInit);
                    }}
                  >
                    <span className="md:m-2 m-1 border border-prigray-600 rounded-full px-2.5 py-1 text-prigray-600 shadow-md">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="border-prigray-300 border-b h-7/100 mobile-only">
        <div className="mt-4 h-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="flex items-center justify-center flex-nowrap h-full"
          >
            {chunkArray(geoCode, 4).map((group, groupIdx) => (
              <SwiperSlide key={groupIdx} className="flex items-center justify-center h-full">
                {group.map((item, itemIdx) => {
                  const data = geo.filter((i) => i["시도군"] === item.name);
                  return (
                    <Link
                      key={itemIdx}
                      to={`/map/${item.code}`}
                      state={{ data: data }}
                      onClick={() => {
                        moveToMarket(item, mapInit);
                      }}
                    >
                      <span className="mx-1 border border-prigray-600 rounded-full px-2.5 py-1 text-prigray-600 shadow-md">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="bg-prigray-100 w-full h-87/100">
        <Outlet />
        <div className="w-full h-full" ref={mapElement}></div>
      </div>
    </div>
  );
};

export default MapLayout;
