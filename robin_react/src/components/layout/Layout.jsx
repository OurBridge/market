import React from "react";
import NaverMap from "../component/NaverMap";
import Navbar from "../component/Navbar";

const Layout = ({ saveMap }) => {
  return (
    <>
    <Navbar/>
    <NaverMap saveMap={saveMap} />
    </>
  );
};

export default Layout;
