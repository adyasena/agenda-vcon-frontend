import React, { useState, useMemo } from "react";
import Moment from "moment/moment";
import Loading from "./loading";
import Table from "./table";
import { useFetch } from "../helpers/useFetch";
import YesCircle from "../assets/yesCircle.svg";
import NoCircle from "../assets/noCircle.svg";


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
        Header: 'No',
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
          return Moment(value).format("DD MMMM YYYY");
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
        width: 150,
      },
      {
        Header: "Peserta",
        accessor: "peserta",
        width: 150,
      },
      {
        Header: "Topik",
        accessor: "topik",
        width: 200,
      },
      {
        Header: "Tempat",
        accessor: "tempat",
        width: 160,
      },
      {
        Header: "Keterangan",
        accessor: "keterangan",
        width: 120,
      },
      {
        Header: "Surat Pinjam",
        accessor: agenda => {
          return ((agenda.suratPinjam ? <img src={YesCircle} alt="Ada" className="w-5 items-center inline" /> 
            : <img src={NoCircle} alt="Tidak Ada" className="w-5 items-center inline" />));
        },
        width: 60,
      },
    ], []
  );

  return (
    <div className="bg-gradient-to-l from-blue-light to-blue-primary">
      <div className="w-full h-screen pt-20 pb-6 lg:px-12 items-center">
        <div className="bg-white py-5 px-5 rounded-xl flex flex-col items-center h-full">
          <div className="text-black text-center text-2xl font-poppins font-semibold">
            Agenda VCON
          </div>
          <div className="container mx-auto text-sm pt-2 rounded-md items-center flex flex-col w-full font:roboto ">
            {isLoading ? (
              <div className="w-full py-10 flex justify-center">
                <Loading/>
              </div>
            ) : (
              <Table columns={columns} data={agenda} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin;