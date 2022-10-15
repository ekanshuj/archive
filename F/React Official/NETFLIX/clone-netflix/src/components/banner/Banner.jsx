import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Banner.css';
import { baseUrl, poster_img } from '../Config';
import request from '../Requests';

function Banner() {
  const [banners, setBanners] = useState([]);

  const fetchBanner = async () => {
    const { data } = await axios.get(`${baseUrl}/${request.fetchNetflixOriginals}`);
    setBanners(data.results[Math.floor(Math.random() * data.results.length - 1)]);
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  // console.log(banners);


  return (
    <header>
      <div style={{
        background: `url(${poster_img}${banners?.backdrop_path})`,
      }} className="banner__poster">
        <div className="banner__info">
          <h1>
            {banners?.name || banners?.title || banners?.original_name}
          </h1>
          <div className="banner__buttons">
            <button>Play</button>
            <button>My List</button>
          </div>
          <span>
            <h4>{banners?.overview}</h4>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Banner