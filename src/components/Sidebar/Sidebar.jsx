import React from "react";
import { ImHome3 } from "react-icons/im";
import { BiSolidUser } from "react-icons/bi";
import { AiFillCode } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import { TbMailOpenedFilled } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const active = location.pathname;
  return (
    <div className="w-[250px] flex justify-center items-center h-screen bg-[#FEFEFE] dark:bg-[#000000]">
      <div className="flex flex-col w-[80%] gap-10">
        <h1 className=" text-black dark:text-white font-extrabold tracking-[0.3rem] text-2xl">
          PORTFOLIO
        </h1>
        <div className="flex flex-col gap-5">
          <Link to={"/"}>
            <div
              className={`${active == "/" ? "tracking-[0.15rem] dark:text-white text-black" : "text-[#767676] dark:text-[#BBBBBB] tracking-wide"} flex items-center gap-3 hover:tracking-[0.15rem] duration-500 cursor-pointer`}
            >
              <ImHome3 className={`${active == "/" ? "text-black dark:text-white" : "text-[#4C4C4C] dark:text-[#B3B3B3]"}`} />
              <p className="font-medium text-[17px]">Home</p>
            </div>
          </Link>
          <Link to={"/about"}>
            <div className={`${active == "/about" ? "tracking-[0.15rem] dark:text-white text-black" : "text-[#767676] dark:text-[#BBBBBB] tracking-wide"} flex items-center gap-3 hover:tracking-[0.15rem] duration-500 cursor-pointer`}>
              <BiSolidUser className={`${active == "/about" ? "text-black dark:text-white" : "text-[#4C4C4C] dark:text-[#B3B3B3]"}`} />
              <p className="font-medium text-[17px]">About</p>
            </div>
          </Link>
          <Link to={"/resume"}>
            <div className={`${active == "/resume" ? "tracking-[0.15rem] dark:text-white text-black" : "text-[#767676] dark:text-[#BBBBBB] tracking-wide"} flex items-center gap-3 hover:tracking-[0.15rem] duration-500 cursor-pointer`}>
              <AiFillCode className={`${active == "/about" ? "text-black dark:text-white" : "text-[#4C4C4C] dark:text-[#B3B3B3]"}`} />
              <p className="font-medium text-[17px]">Resume</p>
            </div>
          </Link>
          <Link to={"/projects"}>
            <div className={`${active == "/projects" ? "tracking-[0.15rem] dark:text-white text-black" : "text-[#767676] dark:text-[#BBBBBB] tracking-wide"} flex items-center gap-3 hover:tracking-[0.15rem] duration-500 cursor-pointer`}>
              <AiFillProject className={`${active == "/projects" ? "text-black dark:text-white" : "text-[#4C4C4C] dark:text-[#B3B3B3]"}`} />
              <p className="font-medium text-[17px]">Projects</p>
            </div>
          </Link>
          <Link to={"/contact"}>
            <div className={`${active == "/contact" ? "tracking-[0.15rem] dark:text-white text-black" : "text-[#767676] dark:text-[#BBBBBB] tracking-wide"} flex items-center gap-3 hover:tracking-[0.15rem] duration-500 cursor-pointer`}>
              <TbMailOpenedFilled className={`${active == "/contact" ? "text-black dark:text-white" : "text-[#4C4C4C] dark:text-[#B3B3B3]"}`} />
              <p className="font-medium text-[17px]">Contact</p>
            </div>
          </Link>
        </div>
        <p className="mt-5 tracking-widest italic font-medium text-[#B6B7B6] dark:text-[#8B8B8B]">
          © 2023 Portfolio
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
Sidebar;
