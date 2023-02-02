import React from "react";
import { useNavigate } from "react-router";
import { BgHome, NotFound404 } from "../assets";

const NotFound = () => {
  const navigate = useNavigate();
  const halamanUtama = async () => {
    navigate("/");
  }

  return (
    <div className="w-full font-poppins h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BgHome})`}}>
      <div className="w-full h-screen bg-black bg-opacity-60 flex flex-col justify-center">
        <div className="container m-auto rounded-xl bg-white flex text-xl flex-col gap-5 text-center items-center w-1/2 h-4/5 p-12 justify-center">
          <img src={NotFound404} alt="404 Not Found" className="w-7/12" />
          <div className="text-2xl font-semibold">Halaman tidak ditemukan</div>
          <button className="bg-blue-light text-white font-normal py-2 px-6 rounded-md transform duration-300 ease hover:bg-blue-primary" onClick={halamanUtama}>
              Halaman Utama
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;