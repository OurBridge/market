import React from "react";
import { useNavigate } from "react-router-dom";

const GeoCode = ({ mapInit, item }) => {
  const navigate = useNavigate();
  const handleGeoClick = async (item) => {
    // map 이동
    const geo = item["지리정보"];
    const name = item.name;
    const mapLatLng = new naver.maps.LatLng(
      Number(geo.latitude),
      Number(geo.longitude)
    );

    mapInit.panTo(mapLatLng);
    navigate(`/Test?data=${name}`);
  };
  return <span onClick={() => handleGeoClick(item)}>{item.name}</span>;
};

export default GeoCode;
