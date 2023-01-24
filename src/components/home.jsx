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
        <div className="flex flex-col gap-10 h-full container mx-auto items-center font-poppins text-white">
          <div className="flex flex-row justify-center items-center mt-32 h-24">
            <img src={LogoKominfo} alt="logo kominfo" className="h-full w-auto scale-95" />
            <box className="h-full mx-6 p-[0.07rem] rounded-sm bg-white"></box>
            <img src={LogoPurworejo} alt="lambang purworejo" className="h-full w-auto" />
          </div>
          <div className="font-semibold text-3xl text-center leading-normal">
            Agenda Penggunaan Fasilitas VCON<br />
            Dinas Komunikasi, Informatika, Statistik dan Persandian<br />
            Kabupaten Purworejo
          </div>
          <div className="mt-10">
            <button className="bg-blue-light text-white font-normal py-2 px-6 rounded-full transform duration-300 ease hover:bg-white hover:text-black" onClick={scrollToBottom}>Lihat Agenda</button>
            
          </div>
          <div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;