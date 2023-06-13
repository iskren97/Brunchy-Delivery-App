import React from 'react';
import basket from '../../images/basket.png';
import OrderCSS from './Order.module.css';

const Order = ({ totalAmount }) => {
  return (
    <div className={OrderCSS.orderContainer}>
      <button className={OrderCSS.basketBtn}>
        <img srcSet={basket} alt="basket" />
      </button>

      <p className={OrderCSS.orderPrice}>{totalAmount}$</p>

      <button className={OrderCSS.orderBtn}>Order Now</button>
    </div>
  );
};

export default Order;
