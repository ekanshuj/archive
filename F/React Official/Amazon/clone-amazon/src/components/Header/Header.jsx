import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <Link to={"/"}>
            <div className='Box0'>
              <img className="logo" src="../imgs/logo.png" />
            </div>
          </Link>
          <div className="left__box">
            <div className='Box1'>
              <img className="navigate" src="../imgs/navigate.svg" />
            </div>
            <div className="Box2">
              <small>Hello</small>
              <span>Select your address</span>
            </div>
          </div>
        </div>
        <div className="mid">
          <input type="search" name="search" />
          {/* <img className="search" src="../imgs/search.svg" /> */}
        </div>
        <div className="right">
          <div className="Box3">
            <img className="flag" src="../imgs/flag1.png" />
          </div>
          <div className="box">
            <small>Hello, Sign in</small>
            <span>Account & Lists</span>
          </div>
          <div className="box">
            <small>Returns</small>
            <span>& Orders</span>
          </div>
          <Link to={"/checkout"}>
            <div className="right__box">
              <div className="Box4">
                <img className="cart" src="../imgs/cart.svg" alt="cart" />
              </div>
              <div className="Box5">
                <span>0</span>
                <span>Cart</span>
              </div>
            </div>
          </Link>
        </div>
      </nav>
      <div className="container-fluid">
      </div>
    </header>
  )
}

export default Header