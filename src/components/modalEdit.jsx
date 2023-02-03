import React, { useRef, useState } from "react";
import Moment from "moment/moment";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Close } from "../assets";
import { createFetcher } from "../helpers/fetcher";

const ModalEdit = ({ visible, onClose, row, setRefreshSignal, setShowToast }) => {

  const [isLoading, setIsLoading] = useState(false);

  const tanggalRef = useRef();
  const waktuRef = useRef();
  const suratRef = useRef();
  const hostRef = useRef();
  const pesertaRef = useRef();
  const topikRef = useRef();
  const tempatRef = useRef();
  const keteranganRef = useRef();

  const editAgendaHandler = async () => {
    try {
      setIsLoading(true);

      const agenda = {
        tanggal: tanggalRef.current.value,
        waktu: waktuRef.current.value,  
        host: hostRef.current.value,
        peserta: pesertaRef.current.value,
        topik: topikRef.current.value,
        tempat: tempatRef.current.value,
        keterangan: keteranganRef.current.value,
        suratPinjam: suratRef.current.checked,
      }; 

      const fetcher = createFetcher();

      const res = await fetcher.put("/agenda/" + row._id, agenda);
      if (!res.data.success) throw new Error(res.data.error);
      
      setShowToast("edit");
      setRefreshSignal((s) => !s);
      onClose();

    } catch (error) {
      toast.error("Data tidak lengkap", {
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
      
    } finally {
      setIsLoading(false);
    }
  };
  
  if (!visible) return null;

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-10 text-base">
        <div className="w-1/2 mx-auto bg-white p-6 font-roboto rounded-lg shadow-lg relative flex flex-col gap-4">
          <div className="flex items-start font-semibold text-lg">
            Ubah Agenda
            <button className="ml-auto bg-transparent" onClick={onClose}>
              <img src={Close} className="w-6 rounded-md hover:bg-grey ease transition-all duration-300" />
            </button>
          </div>
          <form className="flex flex-col gap-4" >
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex flex-row justify-between gap-3 mx-auto items-start w-full">
                <div className="flex flex-col justify-start gap-1 w-1/2">
                  <label className="text-sm">Tanggal</label>
                  <input ref={tanggalRef} defaultValue={Moment(row.tanggal).format("yyyy-MM-DD")} name="tanggal" type="date" className="p-[0.2rem] rounded-md border-black border bg-white w-full focus:outline-blue-light" />
                </div>
                <div className="flex flex-col justify-start gap-1 w-1/2">
                  <label className="text-sm">Waktu</label>
                  <input ref={waktuRef} defaultValue={row.waktu} name="waktu" type="time" className="p-[0.2rem] rounded-md border-black border bg-white w-full focus:outline-blue-light" />
                </div>
                <div className="flex flex-col justify-start gap-1 w-1/6">
                  <label className="text-sm">Surat Pinjam</label>
                  <label className="switch">
                    <input ref={suratRef} defaultChecked={row.suratPinjam} name="suratPinjam" type="checkbox" />
                    <div className="slider rounded-md hover:bg-blue-primary "></div>
                  </label>
                </div>
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Host</label>
                <input ref={hostRef} defaultValue={row.host} name="host" type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-blue-light" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Peserta</label>
                <input ref={pesertaRef} defaultValue={row.peserta} name="peserta" type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-blue-light" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Topik</label>
                <textarea ref={topikRef} defaultValue={row.topik} name="topik" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-blue-light" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Tempat</label>
                <input ref={tempatRef} defaultValue={row.tempat} name="tempat" type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-blue-light" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Keterangan</label>
                <input ref={keteranganRef} defaultValue={row.keterangan} name="keterangan" type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-blue-light" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="text-blue-light rounded-md hover:text-blue-primary hover:bg-grey py-2 px-4 ease transition-all duration-300"
                type="button"
                onClick={onClose}>
                  Batal
              </button>
              <button
                className={"py-2 px-4 rounded-md text-white ease transition-all duration-300 " + (isLoading ? "cursor-wait bg-grey" : "hover:bg-blue-primary bg-blue-light")}
                type="submit"
                disabled={isLoading}
                onClick={editAgendaHandler}>
                  Ubah
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
      <div className="opacity-50 fixed inset-0 bg-black" id="container"></div>
    </>
  )
}

export default ModalEdit;