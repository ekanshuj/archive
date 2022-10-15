import React from 'react';
import './Card.css';

const Card = ({ id, img, text }) => {
  return (
    <div className="card-div">
      <img src={img} />
      <br />
      <span className='span-text'>{text}</span>
    </div>
  )
}

export default Card