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

      markerClickEvent(marker, item, map);
    });
  }, []);
  return (
    <>
      <div className="w-full h-full" ref={mapElement}></div>
    </>
  );
};

export default NaverMap;
