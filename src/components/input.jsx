import React from "react";

const Input = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-10 text-base">
        <div className="w-1/2 mx-auto bg-white p-6 font-roboto rounded-lg shadow-lg relative flex flex-col gap-4">
          <div className="flex items-start font-semibold text-lg">
            Tambah Agenda
            <button className="ml-auto bg-transparent" onClick={onClose}>
              X
            </button>
          </div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex flex-row justify-between gap-3 mx-auto items-start w-full">
                <div className="flex flex-col justify-start gap-1 w-1/2">
                  <label className="text-sm">Tanggal</label>
                  <input type="date" className="p-[0.2rem] rounded-md border-black border bg-white w-full focus:outline-blue-light" />
                </div>
                <div className="flex flex-col justify-start gap-1 w-1/2">
                  <label className="text-sm">Waktu</label>
                  <input type="time" className="p-[0.2rem] rounded-md border-black border bg-white w-full focus:outline-blue-light" />
                </div>
                <div className="flex flex-col justify-start gap-1 w-1/6">
                  <label className="text-sm">Surat Pinjam</label>
                  <label className="switch">
                    <input type="checkbox"/>
                    <div className="slider rounded-md hover:bg-blue-primary "></div>
                  </label>
                </div>
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Host</label>
                <input type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-blue-light" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Peserta</label>
                <input type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-blue-light" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Topik</label>
                <textarea className="py-1 px-2 rounded-md border-black border bg-white focus:outline-blue-light" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Tempat</label>
                <input type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-blue-light" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Keterangan</label>
                <input type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-blue-light" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="text-blue-light hover:text-blue-primary bg-none py-2 px-4 ease transition-all duration-300"
                type="button"
                onClick={onClose}>
                  Batal
              </button>
              <button
                className="py-2 px-4 rounded-md hover:bg-blue-primary bg-blue-light text-white ease transition-all duration-300"
                type="submit"
                onClick={onClose}>
                  Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 bg-black" id="container"></div>
    </>
  )
}

export default Input;