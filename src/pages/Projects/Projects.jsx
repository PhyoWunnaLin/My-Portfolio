import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import edu from "../../assets/projectsPhoto/edu.png";
import dashboard from "../../assets/projectsPhoto/dashboard.png";
import contact from "../../assets/projectsPhoto/contact.png";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <MainLayout>
      <div className="w-full flex justify-center py-20">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-[90%] flex flex-col gap-10"
        >
          <div className=" flex flex-col gap-5">
            <p className="bg-[#EEEEEE] w-24 h-10 flex justify-center items-center dark:bg-[#242424] text-[#464545] dark:text-[#BBBBBB] text-[12px] font-bold tracking-widest">
              PROJECTS
            </p>
            <h1 className=" text-black dark:text-white text-3xl font-extrabold">
              Recent Projects
            </h1>
          </div>
          <div className="flex gap-14 flex-wrap mt-3">
            <Link
              to={"https://eduvide.netlify.app"}
              className="card cursor-pointer flex flex-col gap-5 w-[45%] max-lg:w-[100%] bg-white dark:bg-[#323232] shadow-lg dark:shadow-[#252525] rounded"
            >
              <div className="w-full h-[250px] max-lg:h-[500px] max-[830px]:h-[450px] max-md:h-[400px] max-sm:h-[300px] max-[500px]:h-[250px] max-[400px]:h-[200px] max-[350px]:h-[170px] max-[300px]:h-[150px] overflow-hidden rounded-t">
                <img
                  src={edu}
                  className="custom-hover duration-500 w-full h-full object-cover object-top"
                />
              </div>
              <h1 className="text-[#323232] dark:text-white mx-5 text-xl font-bold tracking-wider">
                EduPro Website
              </h1>
              <hr className="border-t border-[#EEEEEE] dark:border-[#1f1e1e] mx-5" />
              <div className="flex gap-1 flex-wrap mx-5 italic">
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-Router-Dom
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Tailwind
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-icons
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-Redux
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-Slick
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Slick-Carousel
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Swiper
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Mantine
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  RTK
                </p>
              </div>
              <hr className="border-t border-[#EEEEEE] dark:border-[#1f1e1e] mx-5" />
              <div className="flex mx-5 mb-5 max-[400px]:justify-between flex-wrap gap-5">
                <div className="w-[150px]">
                  <Link to={"https://eduvide.netlify.app"}>
                    <button className=" px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wider hover:tracking-[0.15em] duration-500 cursor-pointer">
                      Demo
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to={"https://github.com/PhyoWunnaLin/Edu-Pro"}>
                    <button className=" px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wider hover:tracking-[0.15em] duration-500 cursor-pointer">
                      Git
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              to={"https://edu-pro-dashboard2.netlify.app"}
              className="card cursor-pointer flex flex-col gap-5 w-[45%] max-lg:w-[100%] bg-white dark:bg-[#323232] shadow-lg dark:shadow-[#252525] rounded"
            >
              <div className="w-full h-[250px] max-lg:h-[500px] max-[830px]:h-[450px] max-md:h-[400px] max-sm:h-[300px] max-[500px]:h-[250px] max-[400px]:h-[200px] max-[350px]:h-[170px] max-[300px]:h-[150px] overflow-hidden rounded-t">
                <img
                  src={dashboard}
                  className="custom-hover duration-500 w-full h-full object-cover object-top"
                />
              </div>
              <h1 className="text-[#323232] dark:text-white mx-5 text-xl font-bold tracking-wider">
                EduPro Dashboard
              </h1>
              <hr className="border-t border-[#EEEEEE] dark:border-[#1f1e1e] mx-5" />
              <div className="flex gap-1 flex-wrap mx-5 italic">
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-Router-Dom
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Tailwind
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-icons
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-Redux
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Chart-JS
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Date-FNS
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Cookie
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Mantine
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  RTK
                </p>
              </div>
              <hr className="border-t border-[#EEEEEE] dark:border-[#1f1e1e] mx-5" />
              <div className="flex mx-5 mb-5 max-[400px]:justify-between flex-wrap gap-5">
                <div className="w-[150px]">
                  <Link to={"https://edu-pro-dashboard2.netlify.app"}>
                    <button className=" px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wider hover:tracking-[0.15em] duration-500 cursor-pointer">
                      Demo
                    </button>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"https://github.com/PhyoWunnaLin/Edu_Pro_Dashboard"}
                  >
                    <button className=" px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wider hover:tracking-[0.15em] duration-500 cursor-pointer">
                      Git
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              to={"https://contact-web1.netlify.app"}
              className="card cursor-pointer flex flex-col gap-5 w-[45%] max-lg:w-[100%] bg-white dark:bg-[#323232] shadow-lg dark:shadow-[#252525] rounded"
            >
              <div className="w-full h-[250px] max-lg:h-[500px] max-[830px]:h-[450px] max-md:h-[400px] max-sm:h-[300px] max-[500px]:h-[250px] max-[400px]:h-[200px] max-[350px]:h-[170px] max-[300px]:h-[150px] overflow-hidden rounded">
                <img
                  src={contact}
                  className="custom-hover duration-500 w-full h-full object-cover object-top"
                />
              </div>
              <h1 className="text-[#323232] dark:text-white mx-5 text-xl font-bold tracking-wider">
                Contact Web
              </h1>
              <hr className="border-t border-[#EEEEEE] dark:border-[#1f1e1e] mx-5" />
              <div className="flex gap-1 flex-wrap mx-5 italic">
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-Router-Dom
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Tailwind
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-icons
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-Redux
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-Drag-Drop-Files
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  React-Hot-Toast
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  sweetalert2
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Mantine
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  RTK
                </p>
                <p className="mr-5 text-[#323232] dark:text-[#adadad] font-medium tracking-widest">
                  Cookie
                </p>
              </div>
              <hr className="border-t border-[#EEEEEE] dark:border-[#1f1e1e] mx-5" />
              <div className="flex mx-5 mb-5 max-[400px]:justify-between flex-wrap gap-5">
                <div className="w-[150px]">
                  <Link to={"https://contact-web1.netlify.app"}>
                    <button className=" px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wider hover:tracking-[0.15em] duration-500">
                      Demo
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to={"https://github.com/PhyoWunnaLin/Contact-web"}>
                    <button className=" px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wider hover:tracking-[0.15em] duration-500">
                      Git
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
