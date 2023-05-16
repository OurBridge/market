import Head from "next/head";
import React from "react";

export default function NaverMap({ mapElement }) {
  const CLIENT_ID = process.env.NAVER_CLOUD_CLIENT_ID;
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
