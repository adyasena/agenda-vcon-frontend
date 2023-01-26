import React, { useEffect, useState, useMemo } from "react";
import { useFilters, useGlobalFilter, useSortBy, useTable } from "react-table";
import { useFetch } from "../helpers/useFetch";
import Table from "./table";
import Moment from "moment/moment";
import FilterForm from "./filter";

const Admin = () => {
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
        Filter: FilterForm,
      },
      {
        Header: "Waktu",
        accessor: "waktu",
        width: 40,
        Filter: FilterForm,
      },
      {
        Header: "Host",
        accessor: "host",
        width: 200,
        Filter: FilterForm,
      },
      {
        Header: "Peserta",
        accessor: "peserta",
        width: 200,
        Filter: FilterForm,
      },
      {
        Header: "Topik",
        accessor: "topik",
        width: 400,
        Filter: FilterForm,
      },
      {
        Header: "Tempat",
        accessor: "tempat",
        width: 200,
        Filter: FilterForm,
      },
      {
        Header: "Keterangan",
        accessor: "keterangan",
        width: 200,
        Filter: FilterForm,
      },
      {
        Header: "Surat Pinjam",
        accessor: "suratPinjam",
        width: 100,
        Filter: FilterForm,
      },
    ], []
  );

  return (
    <div className="bg-gradient-to-l from-blue-light to-blue-primary">
      <div className="w-full h-screen pt-20 lg:px-12 flex flex-col items-center">
        <div className="bg-white py-5 px-5 rounded-xl">
          <div className="text-black text-center text-2xl font-poppins font-semibold">
            Agenda VCON
          </div>
          <div className="container mx-auto text-sm pt-5 rounded-md items-center flex flex-col w-full font:roboto ">
            <Table columns={columns} data={agenda} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin;