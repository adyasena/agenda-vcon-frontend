import React, { useEffect, useState } from "react";
import BgHome from "../assets/home.jpg";
import LogoKominfo from "../assets/logo_kominfo.png";
import LogoPurworejo from "../assets/logo_purworejo.png";

const Home = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BgHome})`}}>
      <div className="w-full h-screen bg-black bg-opacity-60">
        <div className="flex flex-col lg:gap-10 gap-14 h-full container mx-auto lg:py-8 py-2 items-center font-poppins text-white">
          <div className="flex flex-row justify-center items-center mt-32 h-24">
            <img src={LogoKominfo} alt="logo kominfo" className="lg:h-full h-16 w-auto scale-95" />
            <div className="lg:h-full h-16 mx-6 p-[0.07rem] rounded-sm bg-white"></div>
            <img src={LogoPurworejo} alt="lambang purworejo" className="lg:h-full h-16 w-auto" />
          </div>
          <div className="font-semibold lg:text-3xl text-2xl text-center mt-[-10px] leading-normal">
            Agenda Penggunaan Fasilitas VCON<br />
            Dinas Komunikasi, Informatika, Statistik dan Persandian<br />
            Kabupaten Purworejo
          </div>
          <div className="lg:mt-10">
            <button className="bg-blue-light text-white font-normal py-2 px-6 rounded-full transform duration-300 ease hover:bg-white hover:text-black" onClick={scrollToBottom}>
              Lihat Agenda
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;