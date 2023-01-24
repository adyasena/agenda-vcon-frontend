import React, { useEffect, useState, useMemo } from "react";
import { createFetcher } from "../helpers/fetcher";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import Table from "./table";
import { useFetch } from "../helpers/useFetch";

const Agenda = () => {

  return (
    <div className="w-full h-screen bg-white">
      <div className="pt-20 flex flex-col items-center gap-10">
        <div className="text-black text-center text-2xl font-poppins font-semibold">
          Agenda Hari Ini
        </div>
        <div className="container mx-auto px-12 rounded-md items-center flex flex-col w-full font:roboto">
          {/* {JSON.stringify(data)} */}
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Agenda;