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

const MapLayout = ({ mapInit, saveMapInit }) => {
  const mapElement = useRef(null);
  const navigate = useNavigate();
  const [myLocation, setMyLocation] = useState({});
  let selectedMarker = null; // 선택한 마커 상태를 저장하는 변수

  const getMyPosition = () => {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const res = { latitude, longitude };
            setMyLocation(res);
            resolve(res);
          },
          (error) => {
            console.error(error);
            const defaultLocation = {
              latitude: 37.4979517,
              longitude: 127.0276188,
            };
            setMyLocation(defaultLocation);
            reject(defaultLocation);
          }
        );
      });
    }

    const defaultLocation = { latitude: 37.4979517, longitude: 127.0276188 };
    setMyLocation(defaultLocation);
    return Promise.reject(defaultLocation);
  };

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
  const markerClickEvent = (marker, infowindow, item, map) => {
    naver.maps.Event.addListener(marker, "click", async () => {
      const uid = item.uid;
      const name = item["시장정보"];
      // map.setZoom(16);

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

        marker.setIcon({
          content: generateClickedMarkerHtml(name),
          size: new naver.maps.Size(10, 10),
        });

        selectedMarker = marker; // 선택한 마커 설정
      }

      marker.name = name; // 선택한 마커의 이름을 설정합니다.

      // map 이동하기
      navigate(`/map/market/${uid}`, {state : { data : item }});

      // getMarkerData(item, name);
    });
  };

  useEffect(() => {
    const initializeMap = async () => {
      if (!mapElement.current || !naver) return;

      // Get current position
      let myPosition;
      try {
        myPosition = await getMyPosition();
      } catch (error) {
        console.error(error);
        myPosition = { latitude: 37.5656, longitude: 126.9769 };
      }

      const location = new naver.maps.LatLng(
        myPosition.latitude,
        myPosition.longitude
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
      const locationBtnHtml = `<button type="button" class="bg-white p-1.5 border border-black"><img class="h-5" src="${HOME_PATH}/img/compass.png"/></button>`;
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
              new naver.maps.LatLng(myLocation.latitude, myLocation.longitude)
            );
          }
        );
      });
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
  }, []);

  return (
    <div className="min-h-full">
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
