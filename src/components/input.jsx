import React from "react";

const Input = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-10">
        <div className="w-1/4 mx-auto bg-white p-6 font-roboto rounded-lg shadow-lg relative flex flex-col gap-4">
          <div className="flex items-start font-semibold text-lg">
            Tambah Agenda
            <button className="ml-auto bg-transparent" onClick={onClose}>
              X
            </button>
          </div>
          <div className="flex flex-col items-center ">
            <input type="date" className="w-full"/>
          </div>
          <div className="flex flex-row items-center justify-end text-base">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 bg-black" id="container"></div>
    </>
  )
}

export default Input;