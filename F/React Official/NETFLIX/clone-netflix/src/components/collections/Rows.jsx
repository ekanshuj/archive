import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl, poster_img } from '../Config';
import './Rows.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, Originals }) {
  const [collections, setCollections] = useState([]);
  const [urlId, setUrlId] = useState('');

  const fetchCollections = async () => {
    const { data } = await axios.get(`${baseUrl}/${fetchUrl}`);
    setCollections(data.results);
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  const opts = {
    height: '450px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,

    }
  };

  const onClick = (collection) => {
    if (urlId) {
      setUrlId('');
    }
    else {
      movieTrailer(collection?.name || collection?.original_title || collection?.original_name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setUrlId(urlParams.get('v'));
        })
        .catch(err => console.log(err))

      // movieTrailer(null ,{ tmdbId: movie.id })
      // .then((url)=>{
      //   console.log("url is "+url);
      //   const urlParams=new URLSearchParams(new URL(url).search);
      //   console.log("urlParamsn"+urlParams);
      //   setTrailerUrl(urlParams.get("v"));
      // })
      // .catch((error)=> console.log(error));


    }
  }

  return (
    <>
      <div className='collections__container'>
        <h1>{title}</h1>
        <div className="collection">
          {
            collections.map(collection =>
              <img className={`collection__poster ${Originals && 'poster__originals'}`} onClick={() => onClick(collection)} key={collection.id} src={`${poster_img}${Originals ? collection.poster_path : collection.backdrop_path}`} alt={collection.name} />
            )
          }
        </div>
      </div>
      {
        urlId && <YouTube videoId={urlId} opts={opts} />
      }

    </>
  )
}

export default Row


