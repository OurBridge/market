import {
  generateMarkerHtml,
  generateClickedMarkerHtml,
} from "../utils/requestHtml";
import { geo } from "../json/geo";
import React, { useEffect, useRef, useState } from "react";
// import { Helmet } from "react-helmet";

const NaverMap = () => {
  const mapElement = useRef(null);
  let selectedMarker = null; // 선택한 마커 상태를 저장하는 변수

  useEffect(() => {
    const { naver } = window;
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

    // 커스텀 컨트롤
    const locationBtnHtml =
      '<button type="button"><span>현재 위치 아이콘</span></button>';
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

      // markerClickEvent(marker, item, map);
    });
  }, []);
  return (
    <>
      <div className="w-full h-screen" ref={mapElement}></div>
    </>
  );
};

export default NaverMap;
