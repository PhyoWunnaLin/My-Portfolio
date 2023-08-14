import React from "react";
import DarkMode from "../Darkmode/Darkmode";
import { ClimbingBoxLoader } from "react-spinners";
import { StateContextCustom } from "../../Global/StateContext";

const Loading = () => {
    const {theme} = StateContextCustom();
  return (
    <>
      <div className="hidden">
        <DarkMode />
      </div>
      <div className="flex justify-center items-center w-full h-screen bg-[#F8F8F8] dark:bg-[#111111]">
        {/* <h1 className="text-black dark:text-white text-4xl font-extrabold tracking-widest">
          PORTFOLIO
        </h1> */}
        <ClimbingBoxLoader color={theme == "dark" ? "#FFFFFF" : "#000000"} size={20}/>
      </div>
    </>
  );
};

export default Loading;
