import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-[1150px]:flex">
      <div className=" hidden max-[1150px]:block w-full">
        <Navbar />
      </div>
      <div className="w-[307px]">
        <div className="fixed top-0 left-0 max-[1150px]:hidden">
          <Sidebar />
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
