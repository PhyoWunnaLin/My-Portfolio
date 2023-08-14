import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import about1 from "../../assets/aboutPhoto/about1.jpeg";
import CV from "../../assets/CV/PhyoWunnaLin.pdf";

const About = () => {
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
              ABOUT
            </p>
            <h1 className=" text-black dark:text-white text-3xl font-extrabold">
              About Me
            </h1>
          </div>
          <div className="w-full mt-5">
            <img src={about1} className="w-full" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className=" text-black dark:text-white text-2xl font-bold tracking-wide">
              Phyo Wunna Lin
            </h1>
            <p className="text-[#767676] dark:text-[#BBBBBB] tracking-wide font-medium text-sm">
              Frontend Web Developer
            </p>
          </div>
          <hr className="border-t border-[#e0e0e0] dark:border-[#363636]" />
          <div className="flex flex-col gap-3">
            <p className="text-[#767676] dark:text-[#BBBBBB] tracking-wider font-medium text-sm leading-6">
              Hi, my name is Phyo Wunna Lin and I began using WordPress when it
              first began. I’ve spent most of my waking hours for the last ten
              years designing, programming and operating WordPress sites.
            </p>
            <p className="text-[#767676] dark:text-[#BBBBBB] tracking-wider font-medium text-sm leading-6">
              One of my specialties is taking an idea from scratch and creating
              a full-fledged platform. I go beyond to produce sites with a
              unique, outstanding, contemporary look-and-feel. With extensive
              knowledge of web mechanics, I’m able to optimize complex
              integrations to require little-to-no maintenance while running on
              their own for years.
            </p>
          </div>
          <hr className="border-t border-[#e0e0e0] dark:border-[#363636]" />
          <div className="w-full flex gap-2 max-[810px]:flex-col max-[810px]:gap-4">
            <div className="w-[50%] max-[810px]:w-[100%] flex flex-col gap-2 max-[810px]:gap-4">
              <div className="flex gap-3 max-[810px]:gap-1 flex-wrap items-center">
                <p className="w-20 max-[810px]:w-28 text-black dark:text-white font-bold tracking-wide">
                  Birthday:
                </p>
                <p className="text-[#767676] dark:text-[#BBBBBB] font-medium tracking-wider">
                  13.05.2001
                </p>
              </div>
              <div className="flex gap-3 max-[810px]:gap-1 flex-wrap items-center">
                <p className="w-20 max-[810px]:w-28 text-black dark:text-white font-bold tracking-wide">
                  Age:
                </p>
                <p className="text-[#767676] dark:text-[#BBBBBB] font-medium tracking-wider">
                  22
                </p>
              </div>
              <div className="flex gap-3 max-[810px]:gap-1 flex-wrap items-center">
                <p className="w-20 max-[810px]:w-28 text-black dark:text-white font-bold tracking-wide">
                  Address:
                </p>
                <p className="text-[#767676] dark:text-[#BBBBBB] font-medium tracking-wider">
                  North Dagon, Yangon
                </p>
              </div>
              <div className="flex gap-3 max-[810px]:gap-1 flex-wrap items-center">
                <p className="w-20 max-[810px]:w-28 text-black dark:text-white font-bold tracking-wide">
                  Email:
                </p>
                <p className="text-[#767676] dark:text-[#BBBBBB] font-medium tracking-wider break-all">
                  linphyowunna@gmail.com
                </p>
              </div>
              <div className="flex gap-3 max-[810px]:gap-1 flex-wrap items-center">
                <p className="w-20 max-[810px]:w-28 text-black dark:text-white font-bold tracking-wide">
                  Phone:
                </p>
                <p className="text-[#767676] dark:text-[#BBBBBB] font-medium tracking-wider">
                  09962006882
                </p>
              </div>
            </div>
            <div className="w-[50%] max-[810px]:w-[100%] flex flex-col gap-2 max-[810px]:gap-4">
              <div className="flex gap-1 flex-wrap items-center">
                <p className="w-28 text-black dark:text-white font-bold tracking-wide">
                  Nationality:
                </p>
                <p className="text-[#767676] dark:text-[#BBBBBB] font-medium tracking-wider">
                  Myanmar
                </p>
              </div>
              <div className="flex gap-1 flex-wrap items-center">
                <p className="w-28 text-black dark:text-white font-bold tracking-wide">
                  City:
                </p>
                <p className="text-[#767676] dark:text-[#BBBBBB] font-medium tracking-wider">
                  Yangon
                </p>
              </div>
              <div className="flex gap-1 flex-wrap items-center">
                <p className="w-28 text-black dark:text-white font-bold tracking-wide">
                  Study:
                </p>
                <p className="text-[#767676] dark:text-[#BBBBBB] font-medium tracking-wider">
                  Dagon University
                </p>
              </div>
              <div className="flex gap-1 flex-wrap items-center">
                <p className="w-28 text-black dark:text-white font-bold tracking-wide">
                  Interest:
                </p>
                <p className="text-[#767676] dark:text-[#BBBBBB] font-medium tracking-wider">
                  Playing Football
                </p>
              </div>
            </div>
          </div>
          <hr className="border-t border-[#e0e0e0] dark:border-[#363636]" />
          <div className=" overflow-hidden">
            <a href={CV} download>
              <button className=" px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wider hover:tracking-[0.15em] duration-500">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
