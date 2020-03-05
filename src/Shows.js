import React, { useState, useEffect } from "react";
//import { fetchData } from "../data/data.fetcher.js/index.jscher.js";
import Pagination from "react-hooks-paginator";
import axios from "axios";

const Shows = () => {
  const pageLimit = 10;
  //const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentShow, setCurrentShow] = useState([]);

  // Executes the useEffect hook
  useEffect(() => {
    // Creates an anonymous function
    (async () => {
      // Makes promise-based request and destructures the response
      const {
        data: { data }
      } = await axios.get("/shows.json");
      // Sets the book state
      setData(data);
    })(); // Immediately Invoked Function Expression (IIFE)
  }, []); // Empty dependency array ensures the Effect is only invoked upon initial render

  useEffect(() => {
    setCurrentShow(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  return (
    <div className="App">
      <ul>
        {currentShow.map(data => {
          return (
            <li className="App" key={data.Id}>
              {data.Disc}
              {data.Show} : {data.Episode}
              <a
                className="btn-primary"
                href={data.url}
                target="_blank"
                rel=" noopener noreferrer"
              >
                Url
              </a>
            </li>
          );
        })}
      </ul>
      <Pagination
        totalRecords={currentShow.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Shows;
