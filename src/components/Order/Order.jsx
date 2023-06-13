import React from 'react';
import basket from '../../images/basket.png';
import OrderCSS from './Order.module.css';

const Order = () => {
  return (
    <div className={OrderCSS.orderContainer}>
      <button className={OrderCSS.basketBtn}>
        <img srcSet={basket} alt="basket" />
      </button>

      <p className={OrderCSS.orderPrice}>0.00$</p>

      <button className={OrderCSS.orderBtn}>Order Now</button>
    </div>
  );
};

export default Order;
