import React from 'react';
import MainCSS from './Main.module.css';

const Main = () => {
  return (
    <>
      <p className={MainCSS.intro}>
        The fastest brunch delivery in
        <span className={MainCSS.city}> Your city</span>
      </p>

      <div>
        <p className={MainCSS.desc}>
          This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How
          about you
        </p>
      </div>
    </>
  );
};

export default Main;
