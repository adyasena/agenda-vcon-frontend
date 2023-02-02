import React, { useState } from "react";
import { LogoKominfo } from "../assets";

const NavbarAdmin = () => {
  const [scroll, setScroll] = useState(false);
  const changeClass = () => {
    if (window.scrollY >= 90) {
      setScroll(true)
    }
    else {
      setScroll(false)
    }
  };

  window.addEventListener("scroll", changeClass);

  return (
    <div className="navbar">
      <div className={"navbar bg-gradient-to-l from-blue-light to-blue-primary opacity-100 " + (scroll && "shadow-lg")}>
      </div>
      <div className="z-[1] font-poppins sticky flex flex-row w-full mx-auto lg:px-12 text-center items-center text-lg font-semibold justify-between transform duration-300 ease overflow-hidden h-16">
        <a href="/" className="flex flex-row justify-start items-center text-white h-full">
          <img src={LogoKominfo} alt="logo kominfo" className="m-2 transform duration-300 ease w-8"/>
          <p className="transform">Agenda VCON</p> 
        </a>
          <button className="text-base border-2 font-normal py-2 lg:px-6 px-4 rounded-md transform duration-300 ease bg-white text-blue-light border-white hover:bg-opacity-0 hover:text-white">
            Logout
          </button> 
      </div>
    </div>
  )
};

export default NavbarAdmin;