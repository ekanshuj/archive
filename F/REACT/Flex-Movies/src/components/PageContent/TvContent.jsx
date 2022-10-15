import React from 'react'
import './TvContent.scss'
import { poster_img } from '../Config/config'

const TvContent = ({ poster, name }) => {
  return (
    <>
      <div className="tv">
        <div className="wrap-img">
          <img className='tv-img' src={`${poster_img}/${poster}`} />
        </div>
        <span className='tv-desp'>{name}</span>
      </div>
    </>

  )
}

export default TvContent