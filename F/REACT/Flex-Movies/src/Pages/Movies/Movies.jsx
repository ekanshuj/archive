import './Movies.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesContent from '../../components/PageContent/MoviesContent';
import PaginationOutlined from '../../components/Pagination/PaginationOutlined';

const movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();


  const getMovies = async () => {
    let key = 'b03d822679f351a5bb8393ae613f643d';
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`
    );

    // console.log(data.results);
    setMovies(data.results);
    setNumOfPages(data.total_pages);

  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <>
      <div className="head">
        <h1>Movies</h1>
      </div>
      <div className="movies-Container">
        {
          movies.map((elem) =>
            <MoviesContent key={elem.id} id={elem.id} poster={elem.poster_path} votes={elem.vote_average} des={elem.overview} name={elem.name || elem.original_title} />
          )}
      </div>
      {
        numOfPages > 1 &&
        <PaginationOutlined setPage={setPage} numOfPages={numOfPages} />
      }
    </>
  );

};

export default movies;
