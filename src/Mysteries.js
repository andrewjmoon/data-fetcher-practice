import React, { useEffect } from "react";
import Paginator from "react-hooks-paginator";
import { fetchData } from "./data-fetcher";

function Mysteries() {
  const pageLimit = 10;

  const [offset, setOffset] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [currentData, setCurrentData] = React.useState([]);

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  return (
    <div className="App">
      {currentData.map(data => (
        <p className="App">
          Title:{data.title} Year:{data.year} Notable:{data.notable}
          <br />
          <a
            className="btn-primary"
            href={data.url}
            target="_blank"
            rel=" noopener noreferrer"
          >
            Url
          </a>
        </p>
      ))}

      <Paginator
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Mysteries;
