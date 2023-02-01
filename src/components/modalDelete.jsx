import React, { useState } from "react";
import { createFetcher } from "../helpers/fetcher";

const ModalDelete = ({ visible, onClose, row }) => {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const deleteHandler = async (id) => {
    try {
      setIsDeleteLoading(true);
      const fetcher = createFetcher();
      await fetcher.delete("/agenda/" + id);
    } catch (error) {
      console.error("Error saat menghapus", error)
    } finally {
      setIsDeleteLoading(false);
    }
  }
  if (!visible) return null;

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-10 text-base">
        <div className="w-1/3 mx-auto bg-white p-6 font-roboto rounded-lg shadow-lg relative flex flex-col gap-10">
          <div className="flex items-start font-semibold text-lg">
            Hapus Agenda
            <button className="ml-auto bg-transparent" onClick={onClose}>
              X
            </button>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center w-full">
              Anda yakin ingin menghapus agenda ini?
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="text-red-primary hover:text-red-dark bg-none py-2 px-4 ease transition-all duration-300"
                type="button"
                onClick={onClose}>
                  Batal
              </button>
              <button
                className={"py-2 px-4 rounded-md text-white ease transition-all duration-300 " + (isDeleteLoading ? "cursor-wait" : "bg-red-primary hover:bg-red-dark")}
                type="submit"
                onClick={() => deleteHandler(row)}>
                  Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 bg-black" id="container"></div>
    </>
  )
}

export default ModalDelete;