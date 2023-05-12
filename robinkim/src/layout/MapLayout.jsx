import { HOME_PATH } from "@/src/config/config_home";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

export default function MapLayout({ data }) {
  const CLIENT_ID = process.env.NAVER_CLOUD_CLIENT_ID;
  const [myLocation, setMyLocation] = useState({});
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const mapOptions = {
      center: new naver.maps.LatLng(37.5663, 126.9779),
      zoom: 16,
      zoomControl: false,
      mapTypeControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);

    let selectedMarker = null; // 선택한 마커 상태를 저장하는 변수

    // 마커 클릭 이벤트 핸들러 함수
    const markerClickEvent = (marker, geo, name) => {
      naver.maps.Event.addListener(marker, "click", () => {
        const mapLatLng = new naver.maps.LatLng(
          Number(geo.latitude),
          Number(geo.longitude)
        );

        // 선택한 마커가 이미 선택되어 있는 경우 클릭 해제 처리
        if (selectedMarker === marker) {
          marker.setIcon({
            content: `<div class="marker_img">
              <img src="${HOME_PATH}/img/circle.png" />
              <span>${name}</span>
            </div>`,
            size: new naver.maps.Size(10, 10),
          });

          selectedMarker = null; // 선택한 마커 상태 초기화
        } else {
          // 선택한 마커가 없거나 다른 마커를 선택한 경우
          if (selectedMarker) {
            selectedMarker.setIcon({
              content: `<div class="marker_img">
                <img src="${HOME_PATH}/img/circle.png" />
                <span>${selectedMarker.name}</span>
              </div>`,
              size: new naver.maps.Size(10, 10),
            });
          }

          marker.setIcon({
            content: `<div class="marker_img">
              <img src="${HOME_PATH}/img/clicked.png" />
              <span>${name}</span>
            </div>`,
            size: new naver.maps.Size(10, 10),
          });

          selectedMarker = marker; // 선택한 마커 설정
        }

        map.panTo(mapLatLng);

        marker.name = name; // 선택한 마커의 이름을 설정합니다.
      });
    };

    const handleMapClick = () => {
      // 지도 클릭 시 선택한 마커 클릭 해제 처리
      if (selectedMarker) {
        selectedMarker.setIcon({
          content: `<div class="marker_img">
            <img src="${HOME_PATH}/img/circle.png" />
            <span>${selectedMarker.name}</span>
          </div>`,
          size: new naver.maps.Size(10, 10),
        });

        selectedMarker = null; // 선택한 마커 상태 초기화
      }
    };

    naver.maps.Event.addListener(map, "click", handleMapClick);

    // 마커 표시하기
    data?.forEach((item) => {
      const geo = item["지리정보"];
      const name = item["시장정보"];
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(geo.latitude, geo.longitude),
        map: map,
        icon: {
          content: `<div class="marker_img">
            <img src="${HOME_PATH}/img/circle.png" />
            <span>${name}</span>
          </div>        `,
          size: new naver.maps.Size(10, 10),
        },
      });

      markerClickEvent(marker, geo, name);
    });
  }, []);

  // 현재 위치 추적
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    // 위치추적에 성공했을때 위치 값을 넣어줍니다.
    function success(position) {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
    function error() {
      setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <title>간단한 지도 표시하기</title>
        <script
          type="text/javascript"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}`}
        />
      </Head>
      <div id="map" ref={mapElement} />
    </>
  );
}
