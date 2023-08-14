import React from "react";
import "./Landing.css";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";

const Landing = () => {
  return (
    <div className="w-full h-screen max-sm:py-20 flex justify-center items-center">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="w-[85%] flex max-lg:flex-col gap-6 items-center justify-evenly"
      >
        <div className="avatar">
          <div className="image"></div>
        </div>
        <div className="ml-[80px] max-lg:ml-0 flex flex-col gap-6">
          <div className="flex flex-wrap gap-3 max-lg:mx-auto">
            <h1 className=" max-[800px]:text-3xl max-lg:mx-auto max-lg:text-center text-black dark:text-white font-extrabold text-5xl tracking-wide">
              PHYO
            </h1>
            <h1 className=" max-[800px]:text-3xl max-lg:mx-auto max-lg:text-center text-black dark:text-white font-extrabold text-5xl tracking-wide">
              WUNNA LIN
            </h1>
          </div>
          <div className=" overflow-hidden max-lg:mx-auto">
            <span className=" text-animation before:bg-[#F8F8F8] dark:before:bg-[#111111] text-2xl font-medium text-black dark:text-white tracking-widest max-[800px]:text-xl max-[800px]:tracking-normal max-[290px]:text-lg">
              Frontend Web Developer
            </span>
          </div>
          <p className="text-[#767676] dark:text-[#BBBBBB] tracking-wide font-medium leading-7 max-lg:text-center max-lg:mx-auto max-lg:w-[70%] max-[290px]:text-sm">
            Web Developer based in Yangon and happy to travel all over Europe to
            capture photos.
          </p>
          <div className=" max-lg:mx-auto flex gap-3 items-center text-black dark:text-white">
            <a href="https://www.facebook.com/phyo.wunnalin.5">
              <RiFacebookFill className=" text-lg cursor-pointer hover-up duration-500 hover:text-[#767676] dark:hover:text-[#BBBBBB]" />
            </a>
            <a href="https://www.instagram.com/phyo_wunna_lin">
              <RiInstagramFill className=" text-lg cursor-pointer hover-up duration-500 hover:text-[#767676] dark:hover:text-[#BBBBBB]" />
            </a>
            <RiTwitterFill className=" text-lg cursor-pointer hover-up duration-500 hover:text-[#767676] dark:hover:text-[#BBBBBB]" />
            <BiLogoGmail className=" text-lg cursor-pointer hover-up duration-500 hover:text-[#767676] dark:hover:text-[#BBBBBB]" />
            <BiLogoTelegram className=" text-lg cursor-pointer hover-up duration-500 hover:text-[#767676] dark:hover:text-[#BBBBBB]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
