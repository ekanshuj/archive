import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {

  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setActive(true);
      }
      else {
        setActive(false);
      }
    });

    // return () => {
    //   window.removeEventListener('scroll');
    // }

  }, []);

  return (
    <div className={`nav ${active && 'nav__scroll'}`}>
      <div className="nav__logo">
        <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo.png" alt='Netflix' />
      </div>
      <div className="nav__profile">
        <img src="https://external-preview.redd.it/0dTT-3SprPcsNCqo1GTCI-nqGM9EdZYwqyYr_pZ-baE.jpg?auto=webp&s=a1e8532d326f5aa122df2f31694bf142f117fc06" alt="Profile" />
      </div>
    </div>
  )
}

export default Navbar