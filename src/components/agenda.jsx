import React, { useEffect, useState, useMemo } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import { useFetch } from "../helpers/useFetch";
import Table from "./table";
import Moment from "moment/moment";
import BgHome from "../assets/home.jpg";

const Agenda = () => {
  const {error, isLoading, data: agendaData} = useFetch("/agenda");

  const [agenda, setAgenda] = useState([]);
  useEffect(() => {
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
  }
  
  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "a",
        Cell: (prop) => prop.row.index+1,
        width: 40,
      },
      {
        Header: "Tanggal",
        accessor: agenda => {
          formatTanggal();
          return Moment(agenda.tanggal)
            .local('id')
            .format("DD MMMM YYYY")
        },
        width: 160,
      },
      {
        Header: "Waktu",
        accessor: "waktu",
        width: 80,
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
        width: 200,
      },
    ], []
  );

  return (
    <div className="bg-gradient-to-l from-blue-light to-blue-primary">
      <div className="container mx-auto w-full h-screen pt-24 px-12 flex flex-col items-center">
        <div className="bg-white py-5 px-5 rounded-xl w-full">
          <div className="text-black text-center text-2xl font-poppins font-semibold">
            Agenda Hari Ini
          </div>
          <div className="container mx-auto pt-5 rounded-md items-center flex flex-col w-full font:roboto ">
            <Table columns={columns} data={agenda} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agenda;