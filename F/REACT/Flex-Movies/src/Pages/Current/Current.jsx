import axios from "axios";
import { useEffect, useState } from "react";
import "./Current.scss";
import CurrentContent from "../../components/PageContent/CurrentContent";
import PaginationOutlined from "../../components/Pagination/PaginationOutlined";

const Current = () => {
  const [current, setCurrent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  const getCurrent = async () => {
    let key = "b03d822679f351a5bb8393ae613f643d";
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&page=${page}`
    );

    // console.log(data.results);
    setCurrent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    getCurrent();
  }, [page]);

  return (
    <>
      <div className="current-Container">
        {
          current.map((elem) =>
            <CurrentContent key={elem.id} id={elem.id} poster={elem.poster_path} media={elem.media_type} votes={elem.vote_average} des={elem.overview} date={elem.first_air_date || elem.release_date} name={elem.name || elem.original_title} />
          )
        }
      </div>
      {
        numOfPages > 1 &&
        <PaginationOutlined setPage={setPage} numOfPages={numOfPages} />
      }
    </>
  );
};

export default Current;
