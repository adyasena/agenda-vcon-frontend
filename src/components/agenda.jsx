import React, { useState, useMemo } from "react";
import Moment from "moment/moment";
import TableAgenda from "./tableAgenda";
import Loading from "./loading";
import Footer from "./footer";
import { useFetch } from "../helpers/useFetch";

const Agenda = () => {
  
  const {error, isLoading, data: agendaData} = useFetch("/agenda");

  const [agenda, setAgenda] = useState([]);
  useMemo(() => {
    if (!agendaData?.data?.agenda) return;
    setAgenda(agendaData.data.agenda);
  }, [agendaData]);

  const formatTanggal = () => {
    Moment.updateLocale("id", {
      months : [
          "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
          "Agustus", "September", "Oktober", "November", "Desember"
      ]
    });
  };
  
  const columns = useMemo(
    () => [
      {
        Header: "No",
        Cell: ({ row, flatRows }) => {
          return flatRows.indexOf(row) + 1;
        },
        width: 40,
      },
      {
        Header: "Tanggal",
        accessor: "tanggal",
        Cell: ({value}) => {
          formatTanggal();
          return Moment(value).format("D MMMM YYYY");
        },
        width: 130,
      },
      {
        Header: "Waktu",
        accessor: "waktu",
        width: 60,
      },
      {
        Header: "Host",
        accessor: "host",
        width: 200,
      },
      {
        Header: "Topik",
        accessor: "topik",
        width: 400,
      },
      {
        Header: "Tempat",
        accessor: "tempat",
        width: 160,
      },
    ], []
  );

  return (
    <div className="bg-gradient-to-l from-blue-light to-blue-primary">
      <div className="container mx-auto min-h-screen w-full pt-20 pb-6 lg:px-12 flex flex-col items-center relative">
        <div className="bg-white py-5 px-5 rounded-xl w-full h-full mb-28">
          <div className="text-black text-center text-2xl font-poppins font-semibold">
            Agenda Hari Ini
          </div>
          <div className="container text-sm mx-auto pt-2 rounded-md items-center flex flex-col w-full font:roboto">
            {isLoading ? (
              <div className="w-full py-10 flex justify-center">
                <Loading/>
              </div>
            ) : (
              <TableAgenda columns={columns} data={agenda} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Agenda;