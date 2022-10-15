import './Tv.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TvContent from '../../components/PageContent/TvContent';
import PaginationOutlined from '../../components/Pagination/PaginationOutlined';

const tv = () => {
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();


  const getTv = async () => {
    let key = 'b03d822679f351a5bb8393ae613f643d';
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=${page}`
    );

    // console.log(data.results);
    setTv(data.results);
    setNumOfPages(data.total_pages);

  };

  useEffect(() => {
    getTv();
  }, [page]);

  return (
    <>
      <div className="head">
        <h1>tv</h1>
      </div>
      <div className="tv-Container">
        {
          tv.map((elem) =>
            <TvContent key={elem.id} id={elem.id} poster={elem.poster_path} votes={elem.vote_average} des={elem.overview} name={elem.name || elem.original_title} />
          )}
      </div>
      {
        numOfPages > 1 &&
        <PaginationOutlined setPage={setPage} numOfPages={numOfPages} />
      }
    </>
  );

};

export default tv;
