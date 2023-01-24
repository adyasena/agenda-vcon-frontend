import React, { useEffect, useState } from "react";
import { createFetcher } from "../helpers/fetcher";
import { useFetch } from "../helpers/useFetch";

function JsonDataDisplay(){

  const {error, isLoading, data: agendaData} = useFetch("/agenda");

  const [agenda, setAgenda] = useState([]);
  useEffect(() => {
    if (!agendaData?.data?.agenda) return;
    setAgenda(agendaData.data.agenda.reverse());
  }, [agendaData]);

  const DisplayData=agenda?.map(
    (agenda)=>{
      return(
        <tr key={agenda._id}>
          <td className="border">{agenda._id}</td>
          <td className="border">{agenda.host}</td>
          <td className="border">{agenda.peserta}</td>
          <td className="border">{agenda.topik}</td>
        </tr>
      )
    }
  )

  return(
    <div>
    {error && <div>{error}</div>}
    {isLoading && <div>Loading...</div>}

      <table className="table table-auto border w-full">
        <thead className="border">
          <tr>
            <th className="border">id</th>
            <th className="border">host</th>
            <th className="border">peserta</th>
            <th className="border">topik</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData}
        </tbody>
      </table>
    </div>
  )
}

export default JsonDataDisplay;