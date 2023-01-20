import React from "react";
import { useFetch } from "../utils/hooks/useFetch";

const Home = () => {
  const {error, isLoading, data: agendaData} = useFetch("/agenda");

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("../src/assets/home.jpg")`}}>
      <div className="w-full h-screen bg-black bg-opacity-50">
        <div className="flex flex-col">
          <div>
            {agendaData?.data?.agenda.map((agenda) => (
              <p>{agenda?.tanggal}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;