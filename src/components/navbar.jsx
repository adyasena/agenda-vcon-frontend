import React, { useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true)
    }
    else {
      setScroll(false)
    }
  };

  window.addEventListener("scroll", changeClass);

  return (
    <div className={"navbar font-poppins " + (scroll ? "bg-blue-primary" : "h-24")}>
      <div className={"flex flex-row container mx-auto px-12 text-center items-center text-lg font-semibold " +
        "justify-between transform duration-300 ease overflow-hidden " + (scroll ? "h-16" : "h-24")}>
        
        <div className="flex flex-row justify-start items-center text-white h-full">
          <img src="../src/assets/kmn.png" alt="logo kominfo" className={"m-2 transform duration-300 ease " + (scroll ? "h-1/2" : "h-0 mr-[-4px]")}/>
          <p className="transform">Agenda VCON</p> 
          </div>
        <button className={"text-base border-2 font-normal py-2 px-6 rounded-full transform duration-300 ease "
          + (scroll ? "bg-white text-blue-primary border-white hover:bg-blue-primary hover:text-white" : "text-white border-blue-light hover:bg-blue-light")}>Login Admin</button>
      </div>
    </div>
  )
};

export default Navbar;