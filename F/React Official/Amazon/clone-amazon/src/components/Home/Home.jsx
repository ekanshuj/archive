import React from 'react';
import Banner from './Banner';
import Cards from './Cards';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="container">
        <Banner />
        <Cards />
      </div>
      <div className="connect">
        <div className="sign">
          <span>See personalized recommendations</span>
          <br />
          <button type="submit">Sign In</button>
          <br />
          <span>New customer?<a href="#">Start here.</a></span>
        </div>
      </div>
    </>
  )
}


export default Home