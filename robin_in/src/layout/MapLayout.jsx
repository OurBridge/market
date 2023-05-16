import React, { useEffect, useRef, useState } from "react";
import Navbar from "../organisms/Navbar";
import GeoCode from "../organisms/GeoCode";
import NaverMap from "../organisms/NaverMap";
import { Link, Outlet } from "react-router-dom";
import { geo } from "../json/geo";
import {
  generateClickedMarkerHtml,
  generateMarkerHtml,
} from "../utils/requestHtml";
import { geoCode } from "../json/geoCode";
import { HOME_PATH } from "../config/config_home";

const MapLayout = ({ mapInit, saveMapInit }) => {
  const mapElement = useRef(null);
  let selectedMarker = null; // 선택한 마커 상태를 저장하는 변수

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
  // 마커 클릭 이벤트 핸들러 함수
  const markerClickEvent = (marker, item, map) => {
    naver.maps.Event.addListener(marker, "click", async () => {
      const name = item["시장정보"];
      // map.setZoom(16);

      moveToMarket(item, map);

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

        marker.setIcon({
          content: generateClickedMarkerHtml(name),
          size: new naver.maps.Size(10, 10),
        });

        selectedMarker = marker; // 선택한 마커 설정
      }

      marker.name = name; // 선택한 마커의 이름을 설정합니다.

      //   getMarkerData(item, name);
    });
  };

  useEffect(() => {
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769);
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

    // 커스텀 컨트롤
    const locationBtnHtml = `<button type="button" class="bg-white p-1.5 border border-black"><img class="h-5" src="${HOME_PATH}/img/compass.png"/></button>`;
    naver.maps.Event.once(map, "init", function () {
      //customControl 객체 이용하기
      var customControl = new naver.maps.CustomControl(locationBtnHtml, {
        position: naver.maps.Position.TOP_RIGHT,
      });

      customControl.setMap(map);

      // 현재 위치 가져오기
      naver.maps.Event.addDOMListener(
        customControl.getElement(),
        "click",
        function () {
          map.setCenter(new naver.maps.LatLng(37.3595953, 127.1053971));
        }
      );
    });

    // 마커 표시하기
    geo?.forEach((item) => {
      const geo = item["지리정보"];
      const name = item["시장정보"];

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(geo.latitude, geo.longitude),
        map: map,
        icon: {
          content: generateMarkerHtml(name),
          size: new naver.maps.Size(10, 10),
        },
      });

      markerClickEvent(marker, item, map);
    });
  }, []);

  return (
    <div classNameName="min-h-full">
      <Navbar />
      <div className="border-prigray-300 border-b">
        <div className="mx-28 p-3">
          {geoCode?.map((item, idx) => {
            const data = geo.filter((i) => i["시도군"] === item.name);
            return (
              <Link
                key={idx}
                to={`/map/${item.code}`}
                state={{ data: data }}
                onClick={() => {
                  moveToMarket(item, mapInit);
                }}
              >
                <span
                  className="m-2 border border-prigray-600 rounded-full
               px-2.5 py-1 text-prigray-600 shadow-md"
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="bg-prigray-100 w-full">
        <Outlet />
        <div className="w-full h-screen" ref={mapElement}></div>
      </div>
    </div>
  );
};

export default MapLayout;
