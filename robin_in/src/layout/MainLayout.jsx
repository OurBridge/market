import React from "react";
import Navbar from "../organisms/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-full overflow-hidden">
      <Navbar />
      <div className="overflow-y-auto h-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
