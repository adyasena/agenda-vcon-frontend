import React, { useState, useMemo } from "react";
import Moment from "moment/moment";
import Loading from "./loading";
import Table from "./tableAdmin";
import { useFetch } from "../helpers/useFetch";
import YesCircle from "../assets/yesCircle.svg";
import NoCircle from "../assets/noCircle.svg";
import { useLogin } from "../helpers/useLogin";
import { createFetcher } from "../helpers/fetcher";
import Edit from "./edit";

const Admin = () => {
  useLogin();
  const [refreshSignal, setRefreshSignal] = useState(false);
  const {error, isLoading, data: agendaData} = useFetch("/agenda", refreshSignal);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  console.log(refreshSignal);
  const handleOnClose = () => {
    setShowModal(false);
  };

  const [agenda, setAgenda] = useState([]);
  useMemo(() => {
    if (!agendaData?.data?.agenda) return;
    setAgenda(agendaData.data.agenda);
  }, [agendaData]);

  const deleteHandler = async (id) => {
    try {
      setIsDeleteLoading(true);
      const fetcher = createFetcher();
      await fetcher.delete("/agenda/" + id);
      setRefreshSignal((s) => !s);
    } catch (error) {
      console.error("Error saat menghapus", error)
    } finally {
      setIsDeleteLoading(false);
    }
  }
  const editHandler = async (id) => {
    try {
      console.log("/agenda/"+ id)
    }
    catch (error) {
      console.error(error)
    }
  }

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
        width: 30,
      },
      {
        Header: "Tanggal",
        accessor: "tanggal",
        Cell: ({value}) => {
          formatTanggal();
          return Moment(value).format("DD MMMM YYYY");
        },
        width: 120,
      },
      {
        Header: "Waktu",
        accessor: "waktu",
        width: 50,
      },
      {
        Header: "Host",
        accessor: "host",
        width: 150,
      },
      {
        Header: "Peserta",
        accessor: "peserta",
        width: 120,
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
      {
        Header: "Action",
        accessor: agenda => {
          let id =(agenda._id);
          return ( 
            <div className="flex justify-center gap-2">
              <button onClick={() => {setShowModal(true); editHandler(id)}} className={"rounded-full " + (isDeleteLoading && "bg-blue-light")}>edit</button>
              <button onClick={() => {deleteHandler(id)}} className={"rounded-full " + (isDeleteLoading ? "bg-grey" : "bg-blue-light")}>hapus</button>
            </div>
          )
        },
        width: 60,
      }
    ], []
  );

  return (
    <div className="bg-gradient-to-l from-blue-light to-blue-primary">
      <div className="w-full min-h-screen pt-20 pb-6 lg:px-12 items-center">
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
              <Table columns={columns} data={agenda} setRefreshSignal={setRefreshSignal}/>
            )}
          </div>
        </div>
      </div>
      <Edit onClose={handleOnClose} visible={showModal}></Edit>
    </div>
  )
}

export default Admin;