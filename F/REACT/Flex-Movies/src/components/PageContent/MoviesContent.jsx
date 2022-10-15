import React from 'react'
import './MoviesContent.scss'
import { poster_img } from '../Config/config'

const MoviesContent = ({ poster, name }) => {
  return (
    <>
      <div className="movies">
        <div className="wrap-img">
          <img className='movies-img' src={`${poster_img}/${poster}`} />
        </div>
        <span className='movies-desp'>{name}</span>
      </div>
    </>

  )
}

export default MoviesContent