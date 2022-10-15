import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide banner" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/Unrec/GW/June/Smartwatch_DesktopTallHero_3000x1200._CB634721318_.jpg" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/unrec/D39822856_WLA_BAU_GW-Unrec-heroes_DesktopTallHero_3000x1200_p._CB623159886_.jpg" className="d-block w-100" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner