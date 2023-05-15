import Head from "next/head";
import { HOME_PATH } from "@/src/config/config_home";
import NaverMap from "@/src/components/NaverMap";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { getCommentData, getMapData, getStoreData, naverSearchData } from "@/src/util/requestList";

export default function MapPage({ data }) {
  // console.log(data)
  const geoCode = data?.geocode;
  const [clickedData, setClickedData] = useState({});
  const [mapInit, setMapInit] = useState(null);
  console.log(clickedData)
  const [myLocation, setMyLocation] = useState({});
  const mapElement = useRef(null);
  const CLIENT_ID = process.env.NAVER_CLOUD_CLIENT_ID;


  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const mapOptions = {
      center: new naver.maps.LatLng(35.1600320, 126.8513380),
      zoom: 16,
      zoomControl: false,
      mapTypeControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    // map 초기화
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    setMapInit(map)

    let selectedMarker = null; // 선택한 마커 상태를 저장하는 변수

    // 마커 클릭 이벤트 핸들러 함수
    const markerClickEvent = (marker, item, name) => {
      naver.maps.Event.addListener(marker, "click", async () => {
        const geo = item["지리정보"];
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

        // naver 블로그 API
        const res = await naverSearchData(name);

        // 시장 정보
        // const store = await getStoreData(name);

        // 댓글 정보
        const comment = await getCommentData(name);
        setClickedData({ ...item, ['네이버 블로그']: res?.data?.items, comment: comment });
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
    data?.data?.forEach((item) => {
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

      markerClickEvent(marker, item, name);
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

  const handleGeoClick = async (item) => {
    // map 이동
    const geo = item["지리정보"];
    const name = item.name;
    const mapLatLng = new naver.maps.LatLng(
      Number(geo.latitude),
      Number(geo.longitude)
    );

    mapInit.panTo(mapLatLng);

    // 정보 불러오기
    const market = await getMapData(name);
    setClickedData({ market: market });
  }

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

      <div className="sidebar">
        <input type="text" placeholder="Search" />

        <div className="geo_info">
          {geoCode?.map((item, idx) => (
            <span key={idx} onClick={() => handleGeoClick(item)}>{item.name}</span>
          ))}
        </div>

        <div>
          <div>
            <p>{clickedData?.["시장정보"]}</p>
            <p>{clickedData?.["도로명 주소"]}</p>
            <p>{clickedData?.["지번 주소"]}</p>
            <p>{clickedData?.["시장유형"]}</p>
            <p>{clickedData?.["시장정보"]}</p>
            <p>{clickedData?.["점포수"]}</p>
            <p>{clickedData?.["취급품목"]}</p>
            <p>{clickedData?.["홈페이지주소"]}</p>
          </div>
          {clickedData?.["네이버 블로그"] && (
            <div className="m-3 border">
              <p>네이버 블로그</p>
              {clickedData?.["네이버 블로그"]?.map((blog, idx) => (
                <a className="block my-1" key={idx} href={blog?.link} target="_blank" dangerouslySetInnerHTML={{ __html: blog?.title }} />
              ))}
            </div>
          )}
          {clickedData?.comment && (
            <div className="m-3 border">
              <p>댓글</p>
              {clickedData?.comment?.map((com, idx) => (
                <div key={idx}>
                  <p>{com.comment}</p>
                  <img src={com.img_url}/>
                </div>
              ))}
            </div>
          )}

        </div>


        <div>
          {clickedData?.market?.map((item, idx) => (
            <p key={idx}>{item?.['시장정보']}</p>
          ))}
        </div>

      </div>
      <NaverMap mapElement={mapElement} />
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(`${HOME_PATH}/api/map`);
  const data = response.data;

  const geocode = await axios.get(`${HOME_PATH}/api/geocode`);
  const geocode_ = geocode.data;

  return {
    props: {
      data: {
        data: data,
        geocode: geocode_
      },
    },
  };
}
