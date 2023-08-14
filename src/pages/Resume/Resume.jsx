import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { MdPlayArrow } from "react-icons/md";

const Resume = () => {
  return (
    <MainLayout>
      <div className="flex justify-center py-20">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-[90%] flex flex-col gap-8"
        >
          <div className=" flex flex-col gap-5">
            <p className="bg-[#EEEEEE] w-24 h-10 flex justify-center items-center dark:bg-[#242424] text-[#464545] dark:text-[#BBBBBB] text-[12px] font-bold tracking-widest">
              RESUME
            </p>
            <h1 className=" text-black dark:text-white text-3xl font-extrabold">
              Education & Skill
            </h1>
          </div>
          <div className="mt-5 flex flex-col gap-10 py-20 px-10 bg-[#FFFFFF] dark:bg-[#000000]">
            <h1 className=" text-black dark:text-white text-2xl font-bold tracking-wide">
              Programming Skill
            </h1>
            <div className="flex justify-between max-lg:flex-col max-lg:gap-5 items-center">
              <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      HTML
                    </span>
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      92%
                    </span>
                  </div>
                  <div className="h-[3px] w-full bg-[#E8E8E8] dark:bg-[#444444]">
                    <div className="w-[92%] h-[3px] bg-black dark:bg-[#7B7B7B]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      Javascript
                    </span>
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      65%
                    </span>
                  </div>
                  <div className="h-[3px] w-full bg-[#E8E8E8] dark:bg-[#444444]">
                    <div className="w-[65%] h-[3px] bg-black dark:bg-[#7B7B7B]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      React Js
                    </span>
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      80%
                    </span>
                  </div>
                  <div className="h-[3px] w-full bg-[#E8E8E8] dark:bg-[#444444]">
                    <div className="w-[80%] h-[3px] bg-black dark:bg-[#7B7B7B]"></div>
                  </div>
                </div>
              </div>
              <div className="w-[45%] max-lg:w-[100%] flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      Tailwind
                    </span>
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      90%
                    </span>
                  </div>
                  <div className="h-[3px] w-full bg-[#E8E8E8] dark:bg-[#444444]">
                    <div className="w-[90%] h-[3px] bg-black dark:bg-[#7B7B7B]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      GitHub
                    </span>
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      75%
                    </span>
                  </div>
                  <div className="h-[3px] w-full bg-[#E8E8E8] dark:bg-[#444444]">
                    <div className="w-[75%] h-[3px] bg-black dark:bg-[#7B7B7B]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      Bootstrap
                    </span>
                    <span className=" italic text-[#242424] dark:text-[#BBBBBB] font-medium tracking-widest">
                      70%
                    </span>
                  </div>
                  <div className="h-[3px] w-full bg-[#E8E8E8] dark:bg-[#444444]">
                    <div className="w-[70%] h-[3px] bg-black dark:bg-[#7B7B7B]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-8 flex flex-col px-10 gap-8">
            <h1 className=" text-black dark:text-white text-2xl font-bold tracking-wide">
              Knowledge
            </h1>
            <div className="flex justify-between max-[550px]:flex-col max-[550px]:gap-4">
              <div className="w-[45%] max-[550px]:w-[100%] flex flex-col gap-3 max-[550px]:gap-4">
                <div className="flex gap-3 items-center">
                  <span className=" text-black dark:text-white">
                    <MdPlayArrow />
                  </span>
                  <span className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium">
                    React
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className=" text-black dark:text-white">
                    <MdPlayArrow />
                  </span>
                  <span className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium">
                    RTK
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className=" text-black dark:text-white">
                    <MdPlayArrow />
                  </span>
                  <span className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium">
                    Javascript
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className=" text-black dark:text-white">
                    <MdPlayArrow />
                  </span>
                  <span className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className=" text-black dark:text-white">
                    <MdPlayArrow />
                  </span>
                  <span className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium">
                    Bootstrap
                  </span>
                </div>
              </div>
              <div className="w-[45%] max-[550px]:w-[100%] flex flex-col gap-3 max-[550px]:gap-4">
                <div className="flex gap-3 items-center">
                  <span className=" text-black dark:text-white">
                    <MdPlayArrow />
                  </span>
                  <span className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium">
                    HTML
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className=" text-black dark:text-white">
                    <MdPlayArrow />
                  </span>
                  <span className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium">
                    CSS
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className=" text-black dark:text-white">
                    <MdPlayArrow />
                  </span>
                  <span className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium">
                    SASS
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className=" text-black dark:text-white">
                    <MdPlayArrow />
                  </span>
                  <span className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium">
                    Git, GitHub
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="py-20 px-10 flex max-lg:flex-col max-lg:gap-14 justify-between bg-[#FFFFFF] dark:bg-[#000000]">
            <div className="w-[48%] max-lg:w-[100%] flex flex-col gap-10">
              <h1 className=" text-black dark:text-white text-2xl font-bold tracking-wide">
                Education
              </h1>
              <div className="border-l flex flex-col gap-10 border-[#e0e0e0] dark:border-[#363636]">
                <div className="flex max-[450px]:flex-col max-[450px]:gap-3 max-[450px]:pl-8 pl-7 relative items-center">
                  <div className="h-5 w-5 border border-[#e0e0e0] dark:border-[#363636] rounded-full bg-white dark:bg-black absolute left-[-10px]"></div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center ml-3">
                    <span className="bg-[#F2F2F2] dark:bg-[#111111] py-2 w-32 rounded-full -ml-5">
                      <p className=" text-[#363636] dark:text-[#e0e0e0] font-medium tracking-wider italic text-center">
                        2017 - 2020
                      </p>
                    </span>
                  </div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center">
                    <span className=" flex flex-col gap-2">
                      <h1 className=" text-black dark:text-white text-lg font-medium tracking-wider">
                        Dagon University
                      </h1>
                      <p className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium text-sm">
                        Third Year
                      </p>
                    </span>
                  </div>
                </div>
                <div className="flex max-[450px]:flex-col max-[450px]:gap-3 max-[450px]:pl-8 pl-7 relative items-center">
                  <div className="h-5 w-5 border border-[#e0e0e0] dark:border-[#363636] rounded-full bg-white dark:bg-black absolute left-[-10px]"></div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center ml-3">
                    <span className="bg-[#F2F2F2] dark:bg-[#111111] py-2 w-32 rounded-full -ml-5">
                      <p className=" text-[#363636] dark:text-[#e0e0e0] font-medium tracking-wider italic text-center">
                        2022 - 2023
                      </p>
                    </span>
                  </div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center">
                    <span className=" flex flex-col gap-2">
                      <h1 className=" text-black dark:text-white text-lg font-medium tracking-wider">
                        MMS IT
                      </h1>
                      <p className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium text-sm">
                        Special Web Design
                      </p>
                    </span>
                  </div>
                </div>
                <div className="flex max-[450px]:flex-col max-[450px]:gap-3 max-[450px]:pl-8 pl-7 relative items-center">
                  <div className="h-5 w-5 border border-[#e0e0e0] dark:border-[#363636] rounded-full bg-white dark:bg-black absolute left-[-10px]"></div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center ml-3">
                    <span className="bg-[#F2F2F2] dark:bg-[#111111] py-2 w-32 rounded-full -ml-5">
                      <p className=" text-[#363636] dark:text-[#e0e0e0] font-medium tracking-wider italic text-center">
                        2023 - Now
                      </p>
                    </span>
                  </div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center">
                    <span className=" flex flex-col gap-2">
                      <h1 className=" text-black dark:text-white text-lg font-medium tracking-wider">
                        MMS IT
                      </h1>
                      <p className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium text-sm">
                        WAD
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[48%] max-lg:w-[100%] flex flex-col gap-10">
              <h1 className=" text-black dark:text-white text-2xl font-bold tracking-wide">
                Experience
              </h1>
              <div className="border-l flex flex-col gap-10 border-[#e0e0e0] dark:border-[#363636]">
                <div className="flex max-[450px]:flex-col max-[450px]:gap-3 max-[450px]:pl-8 pl-7 relative items-center">
                  <div className="h-5 w-5 border border-[#e0e0e0] dark:border-[#363636] rounded-full bg-white dark:bg-black absolute left-[-10px]"></div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center ml-3">
                    <span className="bg-[#F2F2F2] dark:bg-[#111111] py-2 w-32 rounded-full -ml-5">
                      <p className=" text-[#363636] dark:text-[#e0e0e0] font-medium tracking-wider italic text-center">
                        2023
                      </p>
                    </span>
                  </div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center">
                    <span className=" flex flex-col gap-2">
                      <h1 className=" text-black dark:text-white text-lg font-medium tracking-wider">
                        MMS IT
                      </h1>
                      <p className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium text-sm">
                        Workshop
                      </p>
                    </span>
                  </div>
                </div>
                <div className="flex max-[450px]:flex-col max-[450px]:gap-3 max-[450px]:pl-8 pl-7 relative items-center">
                  <div className="h-5 w-5 border border-[#e0e0e0] dark:border-[#363636] rounded-full bg-white dark:bg-black absolute left-[-10px]"></div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center ml-3">
                    <span className="bg-[#F2F2F2] dark:bg-[#111111] py-2 w-32 rounded-full -ml-5">
                      <p className=" text-[#363636] dark:text-[#e0e0e0] font-medium tracking-wider italic text-center">
                        2023
                      </p>
                    </span>
                  </div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center">
                    <span className=" flex flex-col gap-2">
                      <h1 className=" text-black dark:text-white text-lg font-medium tracking-wider">
                        EduPro
                      </h1>
                      <p className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium text-sm">
                        Frontend Developer
                      </p>
                    </span>
                  </div>
                </div>
                <div className="flex max-[450px]:flex-col max-[450px]:gap-3 max-[450px]:pl-8 pl-7 relative items-center">
                  <div className="h-5 w-5 border border-[#e0e0e0] dark:border-[#363636] rounded-full bg-white dark:bg-black absolute left-[-10px]"></div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center ml-3">
                    <span className="bg-[#F2F2F2] dark:bg-[#111111] py-2 w-32 rounded-full -ml-5">
                      <p className=" text-[#363636] dark:text-[#e0e0e0] font-medium tracking-wider italic text-center">
                        2023
                      </p>
                    </span>
                  </div>
                  <div className="w-[50%] max-[450px]:w-[100%] flex items-center">
                    <span className=" flex flex-col gap-2">
                      <h1 className=" text-black dark:text-white text-lg font-medium tracking-wider">
                        EduPro Dashboard
                      </h1>
                      <p className="text-[#4C4C4C] dark:text-[#B3B3B3] italic tracking-widest font-medium text-sm">
                        Frontend Developer
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Resume;
