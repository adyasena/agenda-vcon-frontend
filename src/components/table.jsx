import React, { useState } from "react";
import { useTable, useFilters, useGlobalFilter } from "react-table";
import Moment from "moment/moment";

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

  const [filterTahun, setFilterTahun] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [displayTanggal, setDisplayTanggal] = useState("");

  const handleFilterTanggal = e => {
    const value = Moment(e.target.value)
    .local('id')
    .format("DD MMMM YYYY");
    console.log(value)
    setFilter("Tanggal", value);
    setFilterTahun(value);
  };
  const handleFilterTahun = e => {
    const value = e.target.value;
    console.log(e.target.value)
    setFilter("Tanggal", value);
    setFilterInput(value);
  };

  const handleDisplayTanggal = e => {
    const value = Moment(e.target.value)
    .local('id')
    .format("yyyy-MM-DD");
    setDisplayTanggal(value);
    handleFilterTanggal(e);
  };

  const { globalFilter } = state;

  if (rows.length > 0) {

  } else {

  };
  
  return (
    <div className="text-black">
      <div className="flex flex-row justify-start gap-2">
        <input
          type="text"
          placeholder="Cari" 
          className="py-2 px-3 w-40 rounded-md border border-black bg-white mb-3 focus:outline-blue-light"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <input
          type="date"
          placeholder="Cari" 
          className="py-2 px-3 w-40 rounded-md border border-black bg-white mb-3 focus:outline-blue-light"
          value={displayTanggal || null}
          onChange={handleDisplayTanggal}
        />
        <select onChange={handleFilterTahun} className="px-3 w-40 rounded-md border border-black bg-white mb-3 outline-none">
          <option value="">Semua Tahun</option>
          <option value="2022">2022</option>
          <option selected value="2023">2023</option>
        </select>
      </div>
      <div>
      </div>
      <table {...getTableProps()} className="w-full">
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
                    <td {...cell.getCellProps()} className="text-center py-1">
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}