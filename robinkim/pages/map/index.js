import Head from "next/head";
import React, { useEffect, useRef } from "react";

export default function MapPage() {
  const CLIENT_ID = process.env.NAVER_CLOUD_CLIENT_ID;
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    //로케이션표시 Google maps에서 원하는 장소 찾은 후 주변검색을 누르면 좌표를 찾을 수 있다.
    const location = new naver.maps.LatLng(37.5663, 126.9779);

    //네이버 지도 옵션 선택
    const mapOptions = {
      center: location,
      zoom: 16,
      zoomControl: true,
      mapTypeControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    //지도상에 핀 표시 할 부분
    new naver.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <title>간단한 지도 표시하기</title>
        <script type="text/javascript" src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}`}/>
      </Head>

      <div
        id="map"
        style={{ width: "100%", height: "100vh" }}
        ref={mapElement}
      />
    </>
  );
}
