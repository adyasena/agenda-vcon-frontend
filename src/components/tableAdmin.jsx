import React, { useState, useEffect } from "react";
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from "react-table";
import Moment from "moment/moment";
import ModalInput from "./modalInput";
import { ChevronLeft, ChevronRight, ChevronDoubleLeft, ChevronDoubleRight } from "../assets";

export default function Table({ columns, data, setRefreshSignal, setShowToast }) {
  let currentMonth = Moment(new Date().toLocaleDateString()).format("MM");
  let currentYear = Moment(new Date().toLocaleDateString()).format("YYYY");

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
      pageSize: 10,
      filters: [{id: "tanggal", value: currentYear + "-" + currentMonth }],
    } }, useFilters, useGlobalFilter, useSortBy, usePagination);

  const [filterTahun, setFilterTahun] = useState(currentYear);

  const $bulan = document.querySelector('#bulan');

  const handleFilterTahun = e => {
    const tahun = e.target.value;
    setFilter("tanggal", tahun);
    setFilterTahun(tahun);
    $bulan.value = ""
  };

  const handleFilterBulan = e => {
    const bulan = e.target.value;
    setFilter("tanggal", filterTahun + "-" + bulan);
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
          <select defaultValue={currentMonth} id="bulan" onChange={handleFilterBulan} className="px-2 w-40 rounded-md border border-black bg-white mb-3 outline-none">
            <option value="">Pilih Bulan</option>
            <option value="01">Januari</option>
            <option value="02">Februari</option>
            <option value="03">Maret</option>
            <option value="04">April</option>
            <option value="05">Mei</option>
            <option value="06">Juni</option>
            <option value="07">Juli</option>
            <option value="08">Agustus</option>
            <option value="09">September</option>
            <option value="10">Oktober</option>
            <option value="11">November</option>
            <option value="12">Desember</option>
          </select>
          <select defaultValue={currentYear} id="tahun" onChange={handleFilterTahun} className="px-2 w-40 rounded-md border border-black bg-white mb-3 outline-none">
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
      <ModalInput onClose={handleOnClose} visible={showModal} setRefreshSignal={setRefreshSignal} setShowToast={setShowToast}/>
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