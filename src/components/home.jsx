import React from "react";
import { useFetch } from "../utils/hooks/useFetch";

const Home = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const {error, isLoading, data: agendaData} = useFetch("/agenda");

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("../src/assets/home.jpg")`}}>
      <div className="w-full h-screen bg-black bg-opacity-50">
        <div className="flex flex-col gap-10 h-full container mx-auto items-center font-poppins text-white">
          <div className="flex flex-row justify-center items-center mt-32 h-24">
            <img src="../src/assets/logo_kominfo.png" alt="logo kominfo" className="h-full w-auto scale-95" />
            <box className="h-full mx-6 p-[0.07rem] rounded-sm bg-white"></box>
            <img src="../src/assets/logo_purworejo.png" alt="lambang purworejo" className="h-full w-auto" />
          </div>
          <div className="font-semibold text-3xl text-center leading-normal">
            Agenda Penggunaan Fasilitas VCON<br />
            Dinas Komunikasi, Informatika, Statistik dan Persandian<br />
            Kabupaten Purworejo
          </div>
          <div className="mt-10">
            <button className="bg-blue-light text-blue-white font-normal py-2 px-6 rounded-full transform duration-300 ease hover:bg-white hover:text-blue-primary" onClick={scrollToBottom}>Lihat Agenda</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}
/* {agendaData?.data?.agenda.map((agenda) => (
  <p>{agenda?.tanggal}</p>
))} */
export default Home;