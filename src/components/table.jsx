import React, { useEffect, useState } from "react";
import { createFetcher } from "../helpers/fetcher";

function JsonDataDisplay(){
  const [data, setData] = useState();
  const useFetch = async () => {
    const fetcher = createFetcher();
    const response = await fetcher.get("/agenda");

    if (response) {
      setData(response.data.data.agenda);
      console.log(JSON.stringify(data));
    }
  }
  useEffect(() => {
    useFetch();
  }, []);
  const DisplayData=data?.map(
    (agenda)=>{
      return(
        <tr>
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