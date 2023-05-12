import React from "react";

export default function NaverMap({ mapElement }) {
  return (
    <>
      <div id="map" ref={mapElement} />
    </>
  );
}
