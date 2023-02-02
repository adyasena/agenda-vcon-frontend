import React, { useState } from "react";
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from "react-table";
import Moment from "moment/moment";
import { ChevronLeft, ChevronRight, ChevronDoubleLeft, ChevronDoubleRight } from "../assets";

export default function Table({ columns, data }) {
  var now = new Date();
  let currentDate = Moment(new Date().toLocaleDateString()).format("YYYY-MM-DD");
  let currentMonth = Moment(new Date().toLocaleDateString()).format("YYYY-MM");
  let nextMonth = Moment(new Date(now.getFullYear(), now.getMonth()+1).toLocaleDateString()).format("YYYY-MM");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state,
    setGlobalFilter,
    setFilter,
    prepareRow,
    pageOptions,
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
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
      ],
      pageSize: 6,
      filters: [{id: "tanggal", value: currentDate }],
    } }, useFilters, useGlobalFilter, useSortBy, usePagination);
  
  const handleFilterTanggal = e => {
    const value = e.target.value;
    setFilter("tanggal", value);
  };

  const { globalFilter } = state;

  return (
    <div className="text-black">
      <div className="flex flex-row font-poppins justify-start gap-3 align-center">
          <input
            type="text"
            placeholder="Cari" 
            className="py-1 px-2 w-40 rounded-md border border-black bg-white mb-3 focus:outline-blue-light"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <select defaultValue={currentDate} onChange={handleFilterTanggal} className="px-2 w-40 rounded-md border border-black bg-white mb-3 outline-none">
            <option value={currentDate}>Hari Ini</option>
            <option value={currentMonth}>Bulan Ini</option>
            <option value={nextMonth}>Bulan Depan</option>
          </select>
      </div>
      <div className="">
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
            {page.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} className="even:bg-blue-light even:bg-opacity-10">
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()} className="text-center p-1 break-words">
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        {page.length == 0 &&
          <div className="text-center py-10">
            Tidak ada agenda.
          </div>
        }
      </div>
      {page.length > 0 &&
        <div className="flex justify-center gap-2 pt-4 items-center">
          <div className="flex gap-1">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="bg-blue-light p-1 text-white font-semibold rounded-md disabled:bg-grey enabled:hover:bg-blue-primary transition ease-linear duration-300">
              <img src={ChevronDoubleLeft} className="w-3"/>
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage} className="bg-blue-light p-1 text-white font-semibold rounded-md disabled:bg-grey enabled:hover:bg-blue-primary transition ease-linear duration-300">
              <img src={ChevronLeft} className="w-3"/>
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage} className="bg-blue-light p-1 text-white font-semibold rounded-md disabled:bg-grey enabled:hover:bg-blue-primary transition ease-linear duration-300">
              <img src={ChevronRight} className="w-3"/>
            </button>
            <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage} className="bg-blue-light p-1 text-white font-semibold rounded-md disabled:bg-grey enabled:hover:bg-blue-primary transition ease-linear duration-300">
              <img src={ChevronDoubleRight} className="w-3"/>
            </button>
          </div>
          <span className="flex flex-row gap-1">
            Halaman 
            <strong>
              {pageIndex + 1} dari {pageOptions.length}
            </strong>
          </span>
        </div>
      }
    </div>
  );
}