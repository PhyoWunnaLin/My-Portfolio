import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import "./Contact.css";

const Contact = () => {
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
              CONTACT
            </p>
            <h1 className=" text-black dark:text-white text-3xl font-extrabold">
              Get in Touch
            </h1>
          </div>
          <div className="my-3">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488797.9785819234!2d95.85189722927987!3d16.839536845047547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2sYangon!5e0!3m2!1sen!2smm!4v1691918412886!5m2!1sen!2smm"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form className=" flex flex-col gap-7">
            <input
              required
              type="text"
              placeholder="Name"
              className="italic font-medium placeholder:tracking-wider placeholder:text-[#616161] dark:placeholder:text-white py-2 px-4 outline-none bg-transparent text-[#616161] dark:text-white border border-[#BBBBBB] focus:border-[#616161] dark:border-[#3a3a3a] dark:focus:border-[#BBBBBB] duration-500 "
            />
            <input
              required
              type="text"
              placeholder="Email"
              className="italic font-medium placeholder:tracking-wider placeholder:text-[#616161] dark:placeholder:text-white py-2 px-4 outline-none bg-transparent text-[#616161] dark:text-white border border-[#BBBBBB] focus:border-[#616161] dark:border-[#3a3a3a] dark:focus:border-[#BBBBBB] duration-500 "
            />
            <textarea
              required
              className="italic font-medium placeholder:tracking-wider placeholder:text-[#616161] dark:placeholder:text-white py-2 px-4 outline-none bg-transparent text-[#616161] dark:text-white border border-[#BBBBBB] focus:border-[#616161] dark:border-[#3a3a3a] dark:focus:border-[#BBBBBB] duration-500 "
              placeholder="Message"
              cols="30"
              rows="5"
            ></textarea>
            <div className=" overflow-hidden">
              <button className=" px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-medium tracking-wider hover:tracking-[0.15em] duration-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
