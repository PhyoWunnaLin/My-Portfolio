import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import { StateContextCustom } from "../../Global/StateContext";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const { theme } = StateContextCustom();
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  return (
    <>
    <div className="w-full h-16 flex items-center justify-between px-5 max-sm:px-2 bg-white dark:bg-[#323232]">
      <h1 className=" text-black dark:text-white font-extrabold tracking-[0.3rem] text-2xl">
        PORTFOLIO
      </h1>
      <div>
        <Burger color={theme == "dark" ? "#ffffff" : "#000000"} opened={opened} onClick={toggle} aria-label={label} />
      </div>
    </div>
    <div className={`${opened ? "top-0 left-0" : "top-0 left-[-300px]"} absolute duration-700 z-10`}>
    <Sidebar/>
    </div>
    </>
  );
};

export default Navbar;
