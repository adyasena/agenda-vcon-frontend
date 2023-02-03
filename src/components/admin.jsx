import React, { useState, useMemo } from "react";
import Moment from "moment/moment";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./loading";
import TableAdmin from "./tableAdmin";
import ModalEdit from "./modalEdit";
import ModalDelete from "./modalDelete";
import { YesCircle, NoCircle, Edit, Delete } from "../assets";
import { useFetch } from "../helpers/useFetch";
import { useLogin } from "../helpers/useLogin";

const Admin = () => {
  useLogin();
  const [refreshSignal, setRefreshSignal] = useState(false);
  const {error, isLoading, data: agendaData} = useFetch("/agenda", refreshSignal);
  const [id, setId] = useState();
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showToast, setShowToast] = useState();

  const handleOnClose = () => {
    setShowModalEdit(false);
    setShowModalDelete(false);
  };

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
  {(() => {
    if (showToast === "edit") {
      toast.success("Berhasil mengubah agenda!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
      setShowToast("")
    } else if (showToast === "input") {
      toast.success("Berhasil menambah agenda!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
      setShowToast("")
    } else if (showToast === "delete") {
      toast.success("Berhasil menghapus agenda!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
      setShowToast("")
    }
  })()}
  
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
          return Moment(value).format("D MMMM YYYY");
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
          return ((agenda.suratPinjam ? <img src={YesCircle} alt="Ada" className="w-6 items-center inline" /> 
            : <img src={NoCircle} alt="Tidak Ada" className="w-6 items-center inline" />));
        },
        width: 60,
      },
      {
        Header: "Action",
        accessor: agenda => {
          let id =(agenda._id);
          return ( 
            <div className="flex justify-center gap-1">
              <button onClick={() => {setId(agenda); setShowModalEdit(true);}} className="rounded-md p-1 bg-blue-light"><img src={Edit} className="w-4"/></button>
              <button onClick={() => {setId(id); setShowModalDelete(true)}} className="rounded-md p-1 bg-red-primary"><img src={Delete} className="w-4"/></button>
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
              <TableAdmin columns={columns} data={agenda} setRefreshSignal={setRefreshSignal} setShowToast={setShowToast}/>
            )}
          </div>
        </div>
      </div>
      <ModalEdit onClose={handleOnClose} visible={showModalEdit} row={id} setRefreshSignal={setRefreshSignal} setShowToast={setShowToast}/>
      <ModalDelete onClose={handleOnClose} visible={showModalDelete} row={id} setRefreshSignal={setRefreshSignal} setShowToast={setShowToast}/>
      <ToastContainer />
    </div>
  )
}

export default Admin;