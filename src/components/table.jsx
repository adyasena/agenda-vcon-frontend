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

  const [filterInput, setFilterInput] = useState("");
  
  const handleFilterTanggal = e => {
    const value = e.target.value || undefined;
    setFilter("Tanggal", value);
    setFilterInput(value);
  };

  const { globalFilter } = state;

  return (
    <div className="text-black">
      <div className="flex flex-row justify-start">
        <input
          type="text"
          placeholder="Cari" 
          className="py-2 px-3 rounded-md border border-black bg-white mb-3 focus:outline-blue-light"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <input
          type="text"
          className="py-2 px-3 rounded-md border border-black bg-white mb-3 focus:outline-blue-light"
          value={filterInput}
          onChange={handleFilterTanggal}
          placeholder="Tanggal"
        />
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