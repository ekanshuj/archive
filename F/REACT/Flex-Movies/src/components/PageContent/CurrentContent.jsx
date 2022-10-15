import React from 'react'
import './CurrentContent.scss'
import { poster_img } from '../Config/config'

const CurrentContent = ({ media, poster, date, name }) => {
  return (
    <>
      <div className="current">
        <div className="wrap-img">
          <img className='current-img' src={`${poster_img}/${poster}`} />
        </div>
        <span className='current-name'>{name}</span>
        <span className='current-desp'>{media} - {date}</span>
      </div>
    </>

  )
}

export default CurrentContent