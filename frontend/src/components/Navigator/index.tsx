import React, { useState } from "react";
import { useSelector } from "react-redux";
import Drawer from "../Drawer";
import Favorites from "../Favorites";
import { State } from "../../types";

const Navigator = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const userData = useSelector((state: State) => state.user);

  return (
    <nav className="  sticky top-0 z-50 flex items-center justify-between bg-indigo-500  md:mx-4 md:mt-4 md:mb-[33px] md:rounded-[10px] lg:fixed lg:left-0 lg:mr-0 lg:h-3/6 lg:flex-col lg:py-4 ">
      <h2>appLogo</h2>
      <div className=" flex border-primary  border-2 w-3/4 items-center justify-between lg:h-[200px] lg:flex-col 2xs:w-2/5">
        <a
          href="#"
          className="btn text-primary border-primary  md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          {" "}
          Log in
        </a>

        <a
          href="#"
          className="btn text-primary border-solid border-white md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          Sign up
        </a>
      </div>

      <div className="h-14 w-12 ">
        <div className="flex items-center justify-center rounded-full bg-cyan-200 p-px">
          {isOpen ? (
            <button
              className="flex text-4xl text-white items-center cursor-pointer  right-10 top-6 z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              x
            </button>
          ) : (
            <svg
              onClick={() => setIsOpen(!isOpen)}
              className="  z-30 flex items-center cursor-pointer right-10 top-6"
              fill="#2563EB"
              viewBox="0 0 100 80"
              width="20"
              height="30"
            >
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          )}

          {/* <div
            className={`top-4   left-24  bg-blue-600   text-white fixed h-full z-40 ease-in-out duration-300 ${
              isOpen ? "translate-x-0 " : "translate-x-full"
            }`}
          >
            <h3 className="mt-20 text-4xl font-semibold text-white">
              I am a sidebar
            </h3>
          </div> */}
        </div>
      </div>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <>
          <header className="font-bold text-lg">Your favorites</header>

          <Favorites />
        </>
      </Drawer>
    </nav>
  );
};

export default Navigator;
