import React from 'react'
import './header.scss';

const header = () => {

  return (
    <>
      <div className="header">
        <span onClick={() => window.scroll(0, 0)}>
          <img src="../../images/logo.png" alt="flexMovies" />
        </span>
      </div>
    </>
  )
}

export default header