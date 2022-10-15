import React from 'react';
import Card from './Card';
import './Cards.css'

const Cards = () => {
  return (
    <div className="Cards">

      <div className="cards">
        <span className="span-head">Automotive essentials | Up to 60% off</span>
        <div className="card-box">
          <Card id="8956148" text="Cleaning accessories" img="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" />
          <Card id="3265987" text="Tyre & rim care" img="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" />
          <Card id="7845126" text="Helmets" img="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" />
          <Card id="32654875" text="Vacuum cleaner" img="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" />
        </div>
        <a href="#">See more</a>
      </div>

      <div className="cards">
        <span className="span-head">Upgrade your home | Amazon Brands & more</span>
        <div className="card-box">
          <Card id="8956140" text="Smart LED TVs" img="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg" />
          <Card id="3265980" text="Appliances" img="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Appliances_1X_V2_3._SY116_CB636581536_.jpg" />
          <Card id="7845120" text="Furniture" img="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg" />
          <Card id="3265480" text="Kitchen products" img="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg" />
        </div>
        <a href="#">See more</a>
      </div>

      <div className="cards">
        <span className="span-head">Up to 70% off | Styles for Women</span>
        <div className="card-box">
          <Card id="1956148" text="Women's Clothing" img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg" />
          <Card id="1265987" text="Footwear+Handbags" img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg" />
          <Card id="1845126" text="Watches" img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg" />
          <Card id="12654875" text="Fashion jewellery" img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg" />
        </div>
        <a href="#">See more</a>
      </div>

      <div className="logs">
        <div className="log">
          <span className="span-head">Sign in for your best experience</span>
          <button type="submit">Sign in securely</button>
        </div>
      </div>

      <div className="cards">
        <span className="span-head">Shop by Category</span>
        <div className="card-box">
          <Card id="8956048" text="Fresh" img="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg" />
          <Card id="3265087" text="Mobiles" img="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg" />
          <Card id="7845026" text="Fashions" img="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg" />
          <Card id="32654075" text="Electronics" img="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg" />
        </div>
        <a href="#">See more</a>
      </div>

      <div className="cards">
        <span className="span-head">Revamp your home in style</span>
        <div className="card-box">
          <Card id="8756148" text="Bedsheets, curtains & more" img="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg" />
          <Card id="3765987" text="Home decoration" img="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg" />
          <Card id="7745126" text="Home storage" img="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg" />
          <Card id="3765487" text="Lighting solutions" img="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg" />
        </div>
        <a href="#">See more</a>
      </div>

      <div className="cards">
        <span className="span-head">Pay your credit card bills on Amazon</span>
        <div className="single-box">
          <Card id="1756148" text={false} img="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg" />
        </div>
        <a href="#">See more</a>
      </div>

      <div className="cards">
        <span className="span-head">Up to 70% off | Clearance store</span>
        <div className="single-box">
          <Card id="0756148" text={false} img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" />
        </div>
        <a href="#">See more</a>
      </div>

      <div className="cards">
        <span className="span-head">4 star+ rated kitchen rated products & more</span>
        <div className="single-box">
          <Card id="0056148" text={false} img="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/Kitchen_Appliances_cc_1X_V1_1._SY304_CB636573309_.jpg" />
        </div>
        <a href="#">See more</a>
      </div>

    </div>
  )
}

export default Cards