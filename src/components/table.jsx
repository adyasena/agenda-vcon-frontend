import React, { useState } from "react";
import { useTable, useFilters, useGlobalFilter, useSortBy } from "react-table";
import Input from "./input";

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
  } = useTable({ columns, data,
    initialState: {
      sortBy: [
        {
          id: "tanggal",
          desc: false
        },
        {
          id: "waktu",
          desc: false
        }
      ]
    } }, useFilters, useGlobalFilter, useSortBy);
  
  const handleFilterTahun = e => {
    const value = e.target.value;
    setFilter("tanggal", value);
  };

  const { globalFilter } = state;

  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
  };
  
  return (
    <div className="text-black">
      <div className="flex flex-row font-poppins justify-between gap-2 align-center">
        <div className="flex flex-row justify-start gap-3 align-center">
          <input
            type="text"
            placeholder="Cari" 
            className="py-1 px-2 w-40 rounded-md border border-black bg-white mb-3 focus:outline-blue-light"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <select defaultValue={2023} onChange={handleFilterTahun} className="px-2 w-40 rounded-md border border-black bg-white mb-3 outline-none">
            <option value="">Semua Tahun</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <button className="text-base py-1 px-3 mb-3 rounded-md hover:bg-blue-primary bg-blue-light text-white ease transition-all duration-300"
          onClick={() => setShowModal(true)}>
            Tambah Agenda
        </button> 
      </div>
      <table {...getTableProps()} className="w-full table-fixed">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-blue-light bg-opacity-20">
              
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps() )}
                  style={{width: column.width}}
                  className={"cursor-pointer py-1 " +
                    (column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : "")
                  }>
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
      <Input onClose={handleOnClose} visible={showModal} />
    </div>
  );
}