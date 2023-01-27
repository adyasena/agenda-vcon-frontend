import React, { useState } from "react";
import { useTable, useFilters, useGlobalFilter } from "react-table";

export default function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    setFilter,
    prepareRow 
  } = useTable({ columns, data }, useFilters, useGlobalFilter);

  const handleFilterTahun = e => {
    const value = e.target.value;
    setFilter("Tanggal", value);
  };

  const { globalFilter } = state;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="text-black">
      <div className="flex flex-row justify-between gap-2 align-center">
        <div className="flex flex-row justify-start gap-2 align-center">
          <input
            type="text"
            placeholder="Cari" 
            className="py-2 px-3 w-40 rounded-md border border-black bg-white mb-3 focus:outline-blue-light"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <select defaultValue={2023} onChange={handleFilterTahun} className="px-3 w-40 rounded-md border border-black bg-white mb-3 outline-none">
            <option value="">Semua Tahun</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <button className="text-base py-2 px-4 mb-3 rounded-md hover:bg-blue-primary bg-blue-light text-white"
          onClick={() => setShowModal(true)}>
            Tambah Agenda
        </button> 
      </div>
      <table {...getTableProps()} className="w-full table-fixed">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-blue-light bg-opacity-20">
              
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps({
                  style: { width: column.width },
                  })} className="py-1">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className="even:bg-blue-light even:bg-opacity-10">
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} className="text-center py-1 break-words">
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {rows.length == 0 &&
        <div className="text-center py-10">
          Tidak ada agenda.
        </div>
      }
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl font-roboto">
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="text-3xl font-semibold">
                    Tambah Agenda
                  </div>
                  <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    x
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                      Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                      Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}