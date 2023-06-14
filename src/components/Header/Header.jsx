import React from 'react';
import HeaderCSS from './Header.module.css';
import deliveryImg from '../../images/image 1.png';

const Header = () => {
  return (
    <>
      <header className={HeaderCSS.header}>
        <div className={HeaderCSS.container}>
          <div>
            <h1 className={HeaderCSS.heading}>BRUNCHY</h1>
          </div>

          <ul className={HeaderCSS.ul}>
            <a
              href="https://www.dreamshot.bg/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <li className={HeaderCSS.li}>About</li>
            </a>
            <a
              href="https://www.dreamshot.bg/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <li className={HeaderCSS.li}>Call Us</li>
            </a>

            <div className={HeaderCSS.deliveryContainer}>
              <li className={HeaderCSS.delivery}>Free Delivery</li>
              <img srcSet={deliveryImg} alt="delivery" />
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
